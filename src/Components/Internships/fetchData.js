import firebase from "firebase";

export const fetchResume = async ({ setResumeList }) => {
    let resData = [];
    let resTags = [];

    const resumeRef = firebase.database().ref("Placements/Resume");
    await resumeRef.once("value", (snapshot) => {
        snapshot.forEach((child) => {
            let dict = {};
            dict.name = child.val().name;
            dict.batch = child.val().batch;
            dict.id = child.val().id;
            dict.image = child.val().image;
            dict.link = child.val().link;
            dict.cover = child.val().cover;
            dict.linkedin = child.val().linkedin;
            dict.tags = [];
            resData.push(dict);
        });
    });

    const resTagsRef = firebase.database().ref("Placements/ResumeTags");
    await resTagsRef.once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const dict = child.val();
            resTags.push(dict);
        });
    });

    resTags.map((tag) => {
        resData.map((res) => {
            const years = Object.keys(tag.resumes);
            for (let i = 0; i < years.length; i++) {
                const arr = tag.resumes[years[i]];
                if (arr[res.id])
                    res.tags.push(tag.name + " (" + years[i] + ")");
            }
        });
    });

    setResumeList(resData);
};

export const fetchExperience = async ({ setExpList }) => {
    let expData = [];
    let expTags = [];

    const expRef = firebase.database().ref("Placements/InternshipExperience");
    await expRef.once("value", (snapshot) => {
        snapshot.forEach((child) => {
            let dict = {};
            dict.author = child.val().author;
            dict.description = child.val().description;
            dict.image = child.val().image;
            dict.id = child.val().id;
            dict.title = child.val().title;
            dict.type = child.val().type;
            dict.url = child.val().url;
            dict.tags = [];
            if (dict.type === "video") {
                const arr = dict.url.split("/");
                const slug = arr[arr.length - 1];
                dict.embed = "https://youtube.com/embed/" + slug;
            }
            expData.push(dict);
        });
    });

    const expTagsRef = firebase.database().ref("Placements/ExperienceTags");
    await expTagsRef.once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const dict = child.val();
            expTags.push(dict);
        });
    });

    expTags.map((tag) => {
        expData.map((exp) => {
            if (tag.cards[exp.id]) exp.tags.push(tag.name);
        });
    });

    setExpList(expData);
};

export const fetchCP = async ({ setCpList }) => {
    let CpData = [];
    const cpRef = firebase
        .database()
        .ref("Testimonies/Placement-Is CP Important");
    await cpRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().isApproved == true) {
                let name = childSnapshot.val().Name;
                let text = childSnapshot.val().Text;
                let userProfile = childSnapshot.val().UserAvatar;
                let dict = {};
                dict.UserAvatar = userProfile;
                dict.Text = text;
                dict.Name = name;
                dict.Topic = "Placement-Is CP Important";
                dict.isApproved = true;
                CpData.push(dict);
            }
        });
    });
    setCpList(CpData);
};

export const fetchTips = async ({ setTipsList }) => {
    let TipsData = [];
    const tipsRef = firebase.database().ref("Placements/Interview Tips Cards");
    await tipsRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let dict = {};
            dict.img = childSnapshot.val().img;
            dict.text = childSnapshot.val().text;
            TipsData.push(dict);
        });
    });
    setTipsList(TipsData);
};

export const fetchPreparation = async ({ setPrepList }) => {
    let PrepData = [];
    const prepRef = firebase.database().ref("Testimonies/Preparation");
    await prepRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let dict = {};
            dict.name = childSnapshot.val().name;
            dict.designation = childSnapshot.val().designation;
            dict.linkedin = childSnapshot.val().linkedin;
            dict.organisation = childSnapshot.val().organisation;
            dict.profilePic = childSnapshot.val().profilePic;
            dict.resources = childSnapshot.val().resources;
            dict.tipsLong = childSnapshot.val().tipsLong;
            dict.tipsShort = childSnapshot.val().tipsShort;
            PrepData.push(dict);
        });
    });
    setPrepList(PrepData);
};

export const fetchExpVideos = async ({ setExpVideos }) => {
    let ExpVideos = [];
    const expRef = firebase.database().ref("Placements/ExperienceVideos");
    await expRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let dict = {};
            dict.name = childSnapshot.val().name;
            dict.source = childSnapshot.val().link;
            ExpVideos.push(dict);
        });
    });
    setExpVideos(ExpVideos);
};

export const fetchPrepVideos = async ({ setPrepVideos }) => {
    let PrepVideos = [];
    const expRef = firebase.database().ref("Placements/PreparationVideos");
    await expRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let dict = {};
            dict.name = childSnapshot.val().name;
            dict.source = childSnapshot.val().link;
            PrepVideos.push(dict);
        });
    });
    setPrepVideos(PrepVideos);
};

export const fetchExpTest = async ({ setExpTest }) => {
    let testData = [];
    const expRef = firebase
        .database()
        .ref("Testimonies/Placement-Internship Experience");
    await expRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().isApproved == "true") {
                let dict = {};
                dict.UserAvatar = childSnapshot.val().userAvatar;
                dict.Text = childSnapshot.val().text;
                dict.Name = childSnapshot.val().name;
                dict.Topic = "Placement-Internship Experience";
                dict.isApproved = true;
                testData.push(dict);
            }
        });
    });
    setExpTest(testData);
};

export const fetchtipsTest = async ({ setTipsTest }) => {
    let tipsData = [];
    const tipsRef = firebase
        .database()
        .ref("Testimonies/Placement-Interview Tips");
    await tipsRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().isApproved == "true") {
                let dict = {};
                dict.UserAvatar = childSnapshot.val().userAvatar;
                dict.Text = childSnapshot.val().text;
                dict.Name = childSnapshot.val().name;
                dict.Topic = "Placement-Interview Tips";
                dict.isApproved = true;
                tipsData.push(dict);
            }
        });
    });
    setTipsTest(tipsData);
};

export const fetchResumeTest = async ({ setResumeTest }) => {
    let resumeData = [];
    const resumeRef = firebase
        .database()
        .ref("Testimonies/Placement-Resume Tips");
    await resumeRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().isApproved == "true") {
                let dict = {};
                dict.UserAvatar = childSnapshot.val().userAvatar;
                dict.Text = childSnapshot.val().text;
                dict.Name = childSnapshot.val().name;
                dict.Topic = "Placement-Resume Tips";
                dict.isApproved = true;
                resumeData.push(dict);
            }
        });
    });
    setResumeTest(resumeData);
};
