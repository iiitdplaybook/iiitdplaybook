import ResourceCards from "./resourceCards"
import ResourceCards_Mix from "./resourceCards2"
import ResourceCards_Small from "./resourceCards3"
import ExploreCards from "../ExploreCards/ExploreCards"

const addItem = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG_for_cards/addItem.svg";

function items(){

    const color1 = "#fff";
    const color2 = "#fafafa";
    
    const itemslist = {
        "chromeCards_pers":[],
        "chromeCards_acad":[],
        "chromeCards_cool":[],
        "codingCards":[],
        "codingCards_YT":[],
        "networkingCards":[],
        "designCards":[],
        "otherCards":[]
    };

    const chromeCards_pers = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Momentum",
        "description": "Motivate yourself everytime you browse",
        "image":"https://lh3.googleusercontent.com/8aCEKfSlr6Ytgq0TCzt7mlnAeo9qNos8VYyWEaXh3OBm9prFlTgCATha0mAzmvd0VluuxSltQl0U-CJ0U-YkJyRXVg=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Dark Reader",
        "description": "Convert any website to dark mode",
        "image":"https://lh3.googleusercontent.com/XckGUdCyM2j40QXiyrEyFZAO6XMBSBPr67OEWV3jSgWipq4e9DFE-XLA7aAJ4JQatAGIwXSVw_Or_7M_ne0PirpZQg=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Design Tips",
        "description": "Get trending articles about design",
        "image":"https://lh3.googleusercontent.com/cNaP6bUftOYtzZ9jwQfoNAPoC2CvB5qq-cdtaTX5Hd7ztnqq0JofOMrnaoRb-XZtTqOZEVXmdm-72PxCZ67ocRDQvA=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/productdesigntips/jfkbdlhcdoooljpkfjfllhlgeejhabbb?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Google Calendar ",
        "description": "Quick overview of your day",
        "image":"https://lh3.googleusercontent.com/pnuOSzZ1nswi2STE1VCLPj6rzbHAu79tFlsidFy-1aXhgNE98MHlVuXM-uMwp7toGL5yZ72jeG6bi3mvgU-p-vS5iA=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/google-calendar/gmbgaklkmjakoegficnlkhebmhkjfich",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Visualize value",
        "description": "Minimalistic valuable content",
        "image":"https://lh3.googleusercontent.com/CPw74EtQycIqpckaM7FZsiIVJvy_gkB4Dw0eg2zSElRuV5Zn5hi6IoGbSltrklTnB8Fmtlcmow=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/visualize-value/ejblinjidfhnpkjbphoendgjjnhmfoee",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Todoist",
        "description": "Organize your work and life",
        "image":"https://lh3.googleusercontent.com/zqKRvf52hI5Yk6N5C8k6NJnDT7bsEW6whE3wf1UqfpES79AtnrO2ykLgqwciE-bca6QghdXNFJDYe_9xO6iYsvK7=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/todoist-for-chrome/jldhpllghnbhlbpcmnajkpdmadaolakh?hl=en",
    }];

    const chromeCards_acad = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Zotero",
        "description": "Get reference format of any research paper",
        "image":"https://lh3.googleusercontent.com/guA2wpxQkD_QSBXAP-AZTwbhzXkioLbKPv5-5qT8Ixdf2TjXBASKQODEfommzYh1fnXibcJg-PI2o-WgUbORRHA0=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Grammarly",
        "description": "To check you're atisundar englis",
        "image":"https://lh3.googleusercontent.com/fgIyyEUt5FrH1Vd8K0psbk4fni3WVxgpXazIw_SiHvQYfG7_TqI4XcyZVnVtHudFAu71dTWBlMJ1dTJCj6JOAU1n2g=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Design Tips",
        "description": "Get trending articles about design",
        "image":"https://lh3.googleusercontent.com/cNaP6bUftOYtzZ9jwQfoNAPoC2CvB5qq-cdtaTX5Hd7ztnqq0JofOMrnaoRb-XZtTqOZEVXmdm-72PxCZ67ocRDQvA=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/productdesigntips/jfkbdlhcdoooljpkfjfllhlgeejhabbb?hl=en",
    }];

    
    const chromeCards_cool = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Session buddy",
        "description": "Save your 1000+ tabs for later",
        "image":"https://lh3.googleusercontent.com/gzdoa9Uydnuw3G_YKBh0Ua8oFMItgG1NmIDUYKi5W-G4V6A5ACkG_5ffBf1dmUXgOVFKwnShADh0-GLYhHlyXnGQ=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Volume master",
        "description": "Control the volume of a tab",
        "image":"https://lh3.googleusercontent.com/KVGRNfHgQNl3RtCAnq4bTHM23198SfyCES7LnrxnSp21B5xQ2WKRLpIMxaPSYYH0Xp99auk5OQQ6QHjpOL3OvqUi=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Instapaper",
        "description": "Save anything to read later, anywhere",
        "image":"https://lh3.googleusercontent.com/IrEEzh3gjTtGATjxqDQb2CC6f7RiC0D5IpJn9V7OK0Gl07UrwPUq80NaCRCzqReiHc-oMwvDCIJKUz1Q8sWtQbIR=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/instapaper/ldjkgaaoikpmhmkelcgkgacicjfbofhh?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Adblocker",
        "description": "No more ads. No more!",
        "image":"https://lh3.googleusercontent.com/xboK30Q-eBfJBr5ipEcJ4A_QpET20mujleS4fvGf7DAFM-K20WqcNx0rurGbbxQAlfYCitNz7DbF-Mehla1M7Rd9=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/adblocker-for-chrome-noad/alplpnakfeabeiebipdmaenpmbgknjce?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Email Tracker",
        "description": "Track your sent mails",
        "image":"https://lh3.googleusercontent.com/-Qbe0s3I6huZBX4FZbwghJS-NQhR92K0HFmkcz9XxzDYrEjLq4Ig_xKbDk-Jrh2JhSZA5kwJYC74NXcWFEIDeBHH=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/email-tracker-for-gmail-m/ndnaehgpjlnokgebbaldlmgkapkpjkkb?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"GoFull Page",
        "description": "Full page screen capture ",
        "image":"https://lh3.googleusercontent.com/xkq24Y-hSgJHCOs7hskeMNfZatMQYRmybkMY8gGrzHTYVJiQR_2un6xgg9cXY93ShVNU5LdC7n5fddtbQxeNIV0hma8=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl?hl=en",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Fonts Ninja",
        "description": "Identity fonts from any website",
        "image":"https://lh3.googleusercontent.com/FFs5IGsMq5As7MBo1TfKPWs5bAzCJsnXwtW1BrgOp6VuQUVRR3zYbocoPkYYfrayeO20VomUy8LJZ2TAInCIAEQO=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"ColorPick Eyedropper",
        "description": "Identity color from any website",
        "image":"https://lh3.googleusercontent.com/AMn3fHR239GKDCbY0qffgLBZVq1NxYUZ66AhU9AJfgKVlpfzu8-L9C3njXq9TtlMDTRmHshBw0HPAkPQdEjd0Ci1hQ=w128-h128-e365-rj-sc0x00ffffff",
        "pathLink":"https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en",
    }];

    const codingCards_YT = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "channelName":"thenewboston",
        "title": ['React JS Tutorials for Beginners', 'Angular 2 for Beginners Tutorials', 'MongoDB for Beginners Tutorials', 'Node.js Tutorials for Beginners', 'Android App Development for Beginners Playlist'],
        "description": ['Learn React JS', 'Learn Angular', 'Learn MongoDB', 'Learn Node.js', 'Learn Android Development'],
        "link": ['https://www.youtube.com/watch?v=-AbaV3nrw6E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA', 'https://www.youtube.com/watch?v=hXfigUyeHaY&list=PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ', 'https://www.youtube.com/watch?v=1uFY60CESlM&list=PL6gx4Cwl9DGDQ5DrbIl20Zu9hx1IjeVhO', 'https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_', 'https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl'],
        "image":"https://yt3.ggpht.com/ytc/AAUvwnglVjQeNSAVO9GgKkrjIbCO_y0rOx7Yxx-2bv9r_A=s176-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/user/thenewboston",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "channelName":"MIT OpenCourseWare",
        "title": ['Introduction to Computer Science and Programming in Python', 'Introduction to Algorithms', 'Linear Algebra'],
        "description": ['Introduction to Programming', ' Introduction to Algorithms', 'Linear Algebra'],
        "link": ['https://www.youtube.com/watch?v=nykOeWgQcHM&list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA', 'https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb', 'https://www.youtube.com/watch?v=7UJ4CFRGd-U&list=PL221E2BBF13BECF6C'],
        "image":"https://yt3.ggpht.com/ytc/AAUvwniz0cQuf5DkaTMFcOleJYHcLL2eepERIVkj7wX5=s88-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/channel/UCEBb1b_L6zDS3xTUrIALZOw",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "channelName":"freeCodeCamp.org",
        "title": ['Learn Python - Full Course for Beginners', 'Learn JavaScript - Full Course for Beginners', 'C++ Tutorial for Beginners - Full Course', 'Learn Java 8 - Full Tutorial for Beginners', 'Learn HTML5 and CSS3 From Scratch - Full Course'],
        "description": ['This course will give you a full introduction into all of the core concepts in python.', 'This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.', 'This course will give you a full introduction into all of the core concepts in C++.', 'Learn Java 8 - Full Tutorial for Beginners' ,'HTML and CSS are essential skills to have for a career in web development.'],
        "link": ['https://www.youtube.com/watch?v=rfscVS0vtbw', 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 'https://www.youtube.com/watch?v=vLnPwxZdW4Y', 'https://www.youtube.com/watch?v=grEKMHGYyns', 'https://www.youtube.com/watch?v=mU6anWqZJcc'],
        "image":"https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "channelName":"Neso Academy",
        "title": ['Digital Electronics', 'Operating System'],
        "description": ['Digital Electronics', 'Operating System'],
        "link": ['https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm', 'https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O'],
        "image":"https://yt3.ggpht.com/ytc/AAUvwnhdTxmFSM6L7yT9JUSVgo0SfOarfvzNGOm4-tD-=s88-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/user/nesoacademy",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "channelName":"Clever Programmer",
        "title": ['The 5-Day React JavaScript Challenge', 'Learn the MERN Stack', 'WhatsApp Clone with REACT JS', 'COVID-19 Tracker with REACT JS', 'Build a Facebook Messenger Clone'],
        "description": ['Build Amazon Clone Using React', 'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)', "Let's Build a WhatsApp Clone with REACT JS for Beginners!", 'Build a COVID-19 Tracker with REACT JS for Beginners (React Hooks and Material UI)', 'Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone'],
        "link": ['https://www.youtube.com/watch?v=0kiykrN9_Ng&list=PL-J2q3Ga50oNQP__onO64kAHX_z0BdLv6', 'https://www.youtube.com/watch?v=ktjafK4SgWM', 'https://www.youtube.com/watch?v=pUxrDcITyjg', 'https://www.youtube.com/watch?v=cF3pIMJUZxM', 'https://www.youtube.com/watch?v=KB7JEnfc7Dc'],
        "image":"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj",
        "pathLink":"https://www.youtube.com/c/CleverProgrammer",
    }];

    const codingCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,

        "title":"HackerRank",
        "description": "Your first significant other",
        "image":"https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png",
        "pathLink":"https://www.hackerrank.com/",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"CODEFORCES",
        "description": "The one you'll cheat on",
        "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABF1BMVEX+/v7///8AAAA2VZhEX53l5eW8xds8WZpDQ0P4+fvf39+jo6Pi5vAxUZbIyMjt8PYkJCQdkdDW3OlofK3r6+v09PQ+W5seicqRnsIbg8Z2dnYcltKzs7OMjIxWbaUzMzPU1NTW1ta7ICTJycmZmZlxcXG5ubkqKiphYWH70mNRUVGUlJRJSUl+fn7ep6kqTZRXV1fw3N344aC2AACqy+T813QQEBChrcycqsp2iLX77MZddKqFlb350Vo7Ozv6zE+1v9f6yUIAfMMbGxuvAAyYy+plsNuDxeLC5fOw2Ov7+vD73Yf93pv55Kj11dnRdXvdcnnBAADDEBjAHyT5yTatHySqAADbtrg2i8ROmsGzP0LBU1b68tb6jb4jAAAJpElEQVR4nO2ZCZfaRhKAVUgcOpAISDImCHFJaBAs2LENBMwwnmx2Y3ttJ5PJnv//d2xVSwLBzDiTTbxjv1ff8+NotUR/qu7q0liSGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmPsBCQ89jE8H/Pl74i9fsuJHQwTPvvqaePTXL1cR7EF3ULxr/JnhVz98sYZQnOiDdqF7hwA8+/qLN9QLOEkLnnS7AcZQ8OiLN4xPBF5Lr1+TNDx79GuG8JlnWzIcdEfa0QDh6Zu3b968/fYeMUS1MG61psPe5yqJhtJwODpKNfC3s+fE2bfwKzEE6AaFDM/+7ZKnJ/zem3TLAJJZGhXyipnhczLMxfDmdISwkGOrtx1IfufQE3Jkozig2nDUwcr3uNF7/9N3/QBYKpyuGzKUQCuYx4ZnZ8/P0hhSEB89eoa93r3/8P7Dh3eHnmC+ILNJrOtT8amQXL/rBVEwDelHwGnrGQPxq6DniNpg7Ep7FkuVhlZfNFfNhSHOVw9HS1bmZGCHzbIkOlu5DqWVgadAfbnJzj8YhjcNz1JDwTOAJz/+RPy4VwSNtMbF5I71okJhQNc3R1lQdZp1ei7KHsYY8g0FNOxU5YxqU0UlpVomqkqdzt/N9odn6zrdImM9o+PU3VAldXnoIM9Qq9SpiqOzzq60n6XdQj7VwNOXZ4KD4WMy/Obq6qp/9dOf9oYeDjFystkg1abqXiAJ6RCFB7WcUIQNxWNDtVlWytWEWVOVFq6ryEpHKSuusiOfqqLI4ij2a2AY6x1XceVOR5HdcmejQklWlGp2AQMM2XXd9WqNh2VXEgMKbW0cqyeG5Pjy1LDf71/lDVHjxSH4oNliOiCxpmntRABMNAzxe88TYQXqUWtrCUOdDMtLI6HUlEoumRmGhaaugiFBQ7kkjuKtUEpgNVyluhK9G7K8AjKsWukFNnVolt2GYVmWsSvPdmJVFHq63nWO8sfT85fo+FIYPs4bXqHjdwdDHPE8l/7EKptjY09M26KPyacoDDXR4FwWChVbGA5EJhDrCA3lXZJ26EXBABjiq9FR3IYwrKYNLhkuMWS7NJcsKKZoOEvOFzlm5cql5KixsSCbpcdJVhi+vM2wnzcU4QqO0zP0toVCC7IkRm6JoWjAsNZMOu1yODDNQUzxT2JYR0o7VDRmirxLz1+WlaqaxJCO15MYKoq7SmccOLguRQwNcdyg61Gv5Q7TV10Vdx+GhRtbCBqeo+P5uTAUvDoY7mcpOLSwTgzJp5f+/mBE0zRnqIl5S6+XNQQ/J4ZKh1AwzYjhZuOvi+jROhTHcfmV1xYcbkE6a2gdiuNVYVifKUpZRs3OaieSeRTcNHx7cS44Nbzu35ilE/s4/HnDYoXW3a2GWZpJDQVyajjL7qCxN8TMiDNU6TRwuqJh6WhNkaFgZoiYLTuYSmkRu9VNsnudCmaGF6eGv1z3r6/zhhWROvantbuQxi21xXVn5g27IjPRLPXaSCszdJu0l+0WaFjHGNZhP/SqRYblxW63dpVOiVKjjF9za190k+vZZihiv2s2Vw08QZnd9UDx9uLi4vwiMXyVM+yfxJAqmlE3KyE02jnsCY4/2dklL7cOBbhj+r1DpnGc40xjke9MKTeTnVpalRV5n2kwxyoLmnUN16VQijlqLaRcprFUUSPgQVXFZLqTT6J9YkjciOH1cQwdUZQOi7bj2L0p7egAMS3OIv6WTYKBIwy7qoNdhiIzCUOTGqhtoCaGSTySRFFeUvFibMoUrdRQggVuEjhgqGPzuq5SiVcnhcRQTamDWi5ZIqmqHzF8kwj+fBLDb/qkeDDEhUXztHA5aQXiQ62CJQl98qf6cEzvWrIfRq1WK/ALIqZk+IIaiChwDobiklaDNvbFboHbXnllHQytFa4sS8RccctN7LFyXVkRO365mbJqwk5210tMpXQB2brL8GciNXz1mP79kMSw37/+5e+5VWBvc/XJVLMxQWvzQwvW88c1Da6845qm5aibspxfWEZDppoLX6qiyjRmrkghYM1cGfcJsDYz1016yBsMZqmKplnZt5QaMzodqx58uyOEErw+E6n0Kd257/9B/BM/2u//Rfz7Sb78ATOojDDzj8bT9OEJHxjnW2qZx5QHHG9bSRhHMRUWEGQNiB849QZi5OuG3WqNuX+9KonKu4mHm1QOltaNxpq2eKhvGrQ7NJr0xdo0DnSaoFpLcT4eNu4QpAXxH0KMVzXquJ0mrU/evXv3xDk+DRcc7t4mVkW5Z5setaQPa3YxxUnvwL4B6bZFUrDU45+nDdxI8yAdtsRIrKwnatEOr4rrJc0phihnxPl166NPq6fPZ7mPN7fPG83Hz2d7pNOGJOfevOYt5x+PJPcZjlE/MtD/M7RX3LuvRiHMPf6ASMUinKqmPrTK7YAeBIP7Dg0u8Rm0WMsZhgEm4rYqCiftszQEx+9pg/xsPbweXvbUyNDf98S1rHmRJv4CUqwU4eYJpyvjAQztS6yFnLm3naiSvvVjaLfmozam4XkX4oqvgx6Nwt5421Ih8ltbMqy0/MiJuhBGpKO3sOCojDU0dFr4Dl6lNi7iBXvjim+r87jWGvqTh1SMfc9RK20n0rsV2/a1dk0LR1JkgjOY4PeeXulKYxMmoTm2Q1/E0LQnoT6FqShn0XA4hLhlV2zdg6Hn+NJwCnOvaPfA86RKW/M9e3LvhfAJDEELWs6WYtFuAQR6O4JeDdp+LE2HWMG2UQUK4+hF24sPs9TzeiNnoiWGUmsy98doON7OKy3n0gxioD8axfORJ+GVx10IwgczpExa9Iv4xO95OOsgChNDgLmuY+26HWBgYERLzPPAGQlDFYI2RNOplMZwOhDr0MZWvGG1AM8Y2zi9MaKfgeEg0Oe6NIniUbE4ib0I9DE+XEmoF9rb2AtUnHLgRfpQK46GQWIYxL6DzzNh8jfCAMyKHpt4n8z5MB7YhSk+jeEtC319MpXwZlW6OBUezlDthl3J2RbDHhZFoWljpQOOJvXCngNaOHDoOzjYycECScM9D9RiL8S63RnZaWUEkoYn4n5I744+te2ahg81kmlqtkQVPk6T+++5f7wi4VT2VY2U/Tu8SLkd5PAFJ216geP9wazE6fxN+qU9Hkww1TR/8wiga99+DvTC8Hf/t8cfz/8wojvD8hlUogzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzzafkv56IQ/jxeNT0AAAAASUVORK5CYII=",
        "pathLink":"https://codeforces.com/",
    }
    ,{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"CodeChef",
        "description": "The one you'll cheat with",
        "image":"https://www.codechef.com/sites/all/themes/abessive/logo.svg",
        "pathLink":"https://www.codechef.com/",
    },
    {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"GeeksforGeeks",
        "description": "The friend that helps you cheat",
        "image":"data:image/png;base64,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",
        "pathLink":"https://www.geeksforgeeks.org/",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"LeetCode",
        "description": "The one you settle down with",
        "image":"https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
        "pathLink":"https://leetcode.com/",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"InterviewBit",
        "description": "The one you settle down with, player",
        "image":"data:image/png;base64,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",
        "pathLink":"https://www.interviewbit.com/",
    }];

    const networkingCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Women In Tech IIITD (WiT)",
        "description": "WiT is the tech society of IIITD managed by women. The aim is to provide the alumni and seniors a chance to share amazing opportunities with students.",
        "image":"https://cdn5.telesco.pe/file/A92l1iFm48PMisyxb26W-PmOiMW14zNCzrPEw_arnt__j11T93c3AqmSCJ1EyRmyuFewCum1vvL0uk8kw0WM5IDQ7q_EXTBIeSdQjaWgzgOx8UfpV-m-b9FnnwCqAIykZwbUvfJqgXVoI9zM1-cLTlfT7D9w5kTo56jAp1VJk0hRxMyV0TdO-GQr4FJ8NVcfUQfkjnq9fsuPeptVZJxe5q18uzlm9Q8v-acvSispuUoeDDncszU-U4RoxyXnSb84-elU6ADpsr_QtBpWK6NQpH-8WbAcsib_Z_RyQuDsv41N58gefC9feFgVkLiTB4Nzo5o7rxszAXMKCoshmSn3KA.jpg",
        "pathLink":"http://wit.iiitd.edu.in/",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Cold Email Tips To Land Your Dream Job",
        "description": "Learn how to send effective cold-emails to recruiters which will get you interviews for your dream jobs",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsmwRbmPWUfcOOAAMVnLYsdalUxU5BASL_g&usqp=CAU",
        "pathLink":"https://gallery.mailchimp.com/11fa1ee9c20a64044db2d61ba/files/fb9665b4-5a23-4d17-ab6e-64287cb66ad8/Cold_Email_Tips_To_Land_Your_Dream_Job.pdf",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Byld",
        "description": "Byld is the software development club of IIIT-Delhi. We’re a bunch of students who love building apps and hacks using various tools and technologies.",
        "image":"https://byld.iiitd.edu.in/byld-website/assets/images/transparentSmall.png",
        "pathLink":"",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Lean In IIITD",
        "description": "We help women achieve their ambitions and work to create an equal world.",
        "image":"https://instagram.fkwi1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/118364078_796367157840384_9093164501332894747_n.jpg?_nc_ht=instagram.fkwi1-2.fna.fbcdn.net&_nc_ohc=Sex0p1Re-0YAX9fl45e&tp=1&oh=9a2fa0f8d9b6d98e1e7cc54f5795b0b7&oe=6014A4D4",
        "pathLink":"http://t.me/leaniniiitd",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"LinkedIn",
        "description": "Connect the world’s professionals to make them more productive and successful.",
        "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII=",
        "pathLink":"https://www.linkedin.com/",
    },];

    const designCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"DesignHub - IIITD Design community",
        "description": "IIITD's design community to create a positive design culture amongst students.",
        "image":"https://instagram.fkwi6-1.fna.fbcdn.net/v/t51.2885-19/s320x320/132294221_752715192262986_5766191329215450894_n.jpg?_nc_ht=instagram.fkwi6-1.fna.fbcdn.net&_nc_ohc=ACPOXJxw-jQAX__b5AW&tp=1&oh=15fa5393f28c5bcbf1850dc75be48aee&oe=601472B9",
        "pathLink":"https://discord.com/invite/FU2KTtJ",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Behance",
        "description": "Showcase and discover the latest work from top online portfolios by creative professionals.",
        "image":"data:image/jpeg;base64,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",
        "pathLink":"https://www.behance.net/",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Dribbble",
        "description": "Shots from popular and up and coming designers in the Dribbble community.",
        "image":"https://i.pinimg.com/originals/ed/64/b8/ed64b813c2f084721ca65048978f7bb9.gif",
        "pathLink":"https://dribbble.com/",
    }];

    const otherCards = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multicolour posters",
        "description": "Bought by 20 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81BwL6msi8L._SL1500_.jpg",
        "pathLink":"https://amzn.to/3okOX4c",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Wall poster",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/713RslXCZ8L._SL1500_.jpg",
        "pathLink":"https://amzn.to/2L7CPFr",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Breaking bad poster",
        "description": "Bought by 30 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71uVHg4zTLL._SL1500_.jpg",
        "pathLink":"https://amzn.to/36FvEN3",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Sherlock Holmes poster",
        "description": "Bought by 25 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71R1LAb0oeL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VtSDUR",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multi-Purpose Laptop Table",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71laWT3LqBL._SL1500_.jpg",
        "pathLink":"https://amzn.to/2VzLUbM",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Laptop Table Foldable",
        "description": "Bought by 4 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61afaQGKVYL._SL1444_.jpg",
        "pathLink":"https://amzn.to/2VwMOWz",
    }, {
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Multi-Purpose Laptop Table with Study Table",
        "description": "Bought by 3 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/614x3s4PWXL.jpg",
        "pathLink":"https://amzn.to/3owRSa7",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Casio FX-82ES calculator",
        "description": "Bought by 4 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/61w1PMHiZoL._SL1000_.jpg",
        "pathLink":"https://amzn.to/36BiX5S",
    },{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Casio FX-991EX calculator",
        "description": "Bought by 10 students",
        "image":"https://images-na.ssl-images-amazon.com/images/I/616ryRoQ5EL._SL1100_.jpg",
        "pathLink":"https://amzn.to/39F3mnp",
    }];

    const addCard = [{
        "gradientColor_1":color1,
        "gradientColor_2":color2,
        "title":"Something missing? Add a product",
        "description": "Your contribution matters",
        "image":addItem,
        "pathLink":"https://forms.gle/VmLxhSCpmdo1Fjy59",
    }];

    for (let index=0; index<chromeCards_pers.length;index++){
        itemslist["chromeCards_pers"].push(
            ResourceCards_Small(chromeCards_pers[index])
        );
    }
    for (let index=0; index<chromeCards_acad.length;index++){
        itemslist["chromeCards_acad"].push(
            ResourceCards_Small(chromeCards_acad[index])
        );
    }
    for (let index=0; index<chromeCards_cool.length;index++){
        itemslist["chromeCards_cool"].push(
            ResourceCards_Small(chromeCards_cool[index])
        );
    }


    for (let index=0; index<codingCards_YT.length;index++){
        itemslist["codingCards_YT"].push(
            ResourceCards_Mix(codingCards_YT[index])
        );
       
    }

    for (let index=0; index<codingCards.length;index++){
        itemslist["codingCards"].push(
            ResourceCards_Small(codingCards[index])
        );
    }
 
    for (let index=0; index<networkingCards.length;index++){
        itemslist["networkingCards"].push(
            ResourceCards(networkingCards[index])
        );
    }

    for (let index=0; index<designCards.length;index++){
        itemslist["designCards"].push(
            ResourceCards(designCards[index])
        );
        
    }

    for (let index=0; index<otherCards.length;index++){
        itemslist["otherCards"].push(
            ResourceCards(otherCards[index])
        );
       
    }
    itemslist["otherCards"].push(
        ResourceCards(addCard[0])
    );
    return(
        itemslist
    );
}

export default items