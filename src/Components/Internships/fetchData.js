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
