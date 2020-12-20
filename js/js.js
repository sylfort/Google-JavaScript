console.log("Inicio do codigo JavaScript");
   
 var App = {
        init: function() {
            console.log("Inicio do app");

            console.log("==>", this);

            this.elements.createElements();            

            console.log("Fim do app");
 },

store: {},

controllers: {},

events: {},

elements: {
    body: null,
    header: null,
    headerContainer: null,
    nav: null,
    navList: null,
    gmail: null,
    images: null,
    navApps: null,
    navAppsImg: null,
    signIn: null,
    main: null,

    createElements: function () {
        console.log("Inicio criacao de elementos");

        this.app = document.createElement("div");
        this.app.style.width = "100%";
        this.app.style.border = "1px solid black";
        this.app.style.display = "flex";
        document.body.appendChild(this.app);

        this.header = document.createElement("div");
        this.header.style.border = "1px solid green";
        this.header.style.width = "100%";
        this.header.style.height = "100%";
        document.body.appendChild(this.header);

        this.headerContainer = document.createElement("div");
        this.headerContainer.style.margin = "0";
        this.headerContainer.style.minWidth = "0";
        this.headerContainer.style.display = "flex";
        this.headerContainer.style.flexDirection = "column";
        this.headerContainer.style.minHeight = "100vh";
        this.header.appendChild(this.headerContainer);

        this.nav = document.createElement("div");
        this.nav.style.textAlign = "right";
        this.nav.style.width = '100%';
        this.nav.style.padding = "15px";
        this.nav.style.paddingRight = "30px";
        this.headerContainer.appendChild(this.nav);

        this.navList = document.createElement("ul");
        this.navList.style.listStyle= "none";
        this.navList.style.display = "flex";
        this.navList.style.justifyContent = "flex-end";
        this.navList.style.alignItems= "center";
        this.nav.appendChild(this.navList);

        this.gmail = document.createElement("li");
        this.gmail.innerHTML = "Gmail";
        this.gmail.style.cursor = "pointer";
        this.gmail.style.marginRight = "15px";
        this.navList.appendChild(this.gmail);

        this.images = document.createElement("li");
        this.images.innerHTML = "Images";
        this.images.style.cursor = "pointer";
        this.images.style.marginRight = "15px";
        this.navList.appendChild(this.images);

        this.navApps = document.createElement("div");
        this.navApps.style.marginRight = "15px";
        this.navApps.style.display = "flex";
        // this.navApps.style.position = "relative";
        this.navList.appendChild(this.navApps);

        this.navAppsImg = document.createElement("a");
        this.navAppsImg.innerHTML = '<img src=\./images/apps.png>'
        // this.navAppsImg.style.position = "absolute";
        // this.navAppsImg.style.display = "flex";
        this.navAppsImg.style.objectFit = "contain";
        this.navApps.appendChild(this.navAppsImg);

        this.signIn = document.createElement("li");
        this.signIn.innerHTML = "Sign In";
        this.signIn.style.cursor = "pointer";
        this.signIn.style.display = "flex";
        this.signIn.style.marginRight = "15px";
        this.navList.appendChild(this.signIn);

        this.main = document.createElement("div");
        this.main.style.border = "1px solid blue";
        this.main.style.display = "flex";
        this.main.style.marginTop = "30px";
        document.body.appendChild(this.main);

        this.body = document.createElement("div");
        this.body.style.border = "1px solid red";
        this.body.style.fontFamily = "Arial, Helvetica, sans-serif";
        this.body.style.backgroundColor = "white";
        this.app.appendChild(this.body);

        console.log(this.app);

        console.log("Fim criacao de elementos");
    }
},

    };

    console.log(App);

    App.init();

console.log("Fim do codigo JavaScript");

