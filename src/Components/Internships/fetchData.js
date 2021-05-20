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
