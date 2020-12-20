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
    mainImg: null,
    mainImgGoogle: null,
    mainSearch: null,
    mainSearchForm: null,
    mainSearchFormBar: null,
    navAppsImgSquare: null,

    createElements: function () {
        console.log("Inicio criacao de elementos");

        this.app = document.createElement("div");
        this.app.style.width = "100%";
        this.app.style.border = "1px solid black";
        document.body.appendChild(this.app);

        this.header = document.createElement("div");
        // this.header.style.border = "1px solid green";
        this.header.style.width = "100%";
        this.header.style.height = "50px";
        this.app.appendChild(this.header);

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
        // this.nav.style.padding = "15px";
        // this.nav.style.paddingRight = "30px";
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
        this.navList.appendChild(this.navApps);

        this.navAppsImg = document.createElement("a");
        // this.navAppsImg.innerHTML = '<img src=\./images/apps.png>'
        // this.navAppsImg.style.height = "auto";  
        // this.navAppsImg.style.width = "20%";
        // this.navAppsImg.style.position = "relative";
        // this.navAppsImg.style.objectFit = "contain";
        this.navApps.appendChild(this.navAppsImg);

        this.navAppsImgSquare = document.createElement("img");
        // this.navAppsImgSquare.innerHTML = '<img src=\./images/apps.png>'
        this.navAppsImgSquare.src = ('\./images/apps.png');
        this.navAppsImgSquare.style.width = "30%";
        this.navAppsImgSquare.style.height = "auto";  
        this.navAppsImg.appendChild(this.navAppsImgSquare);

        this.signIn = document.createElement("li");
        this.signIn.innerHTML = "Sign In";
        this.signIn.style.cursor = "pointer";

        this.signIn.style.marginRight = "15px";
        this.navList.appendChild(this.signIn);

        // dentro do body

        this.body = document.createElement("div");
        this.body.style.border = "1px solid red";
        this.body.style.fontFamily = "Arial, Helvetica, sans-serif";
        this.body.style.backgroundColor = "white";
        this.app.appendChild(this.body);

        this.main = document.createElement("div");
        this.main.style.border = "1px solid blue";
        this.main.style.display = "flex";
        this.main.style.flexDirection = "column";
        this.main.style.marginTop = "30px";
        this.main.style.flex = "1";
        this.main.style.textAlign = "center";
        this.body.appendChild(this.main);

        this.mainImg = document.createElement("div");
        this.main.appendChild(this.mainImg);

        this.mainImgGoogle = document.createElement("a");
        this.mainImgGoogle.innerHTML = '<img src=\./images/googlelogo.png>'
        this.mainImg.appendChild(this.mainImgGoogle);

        this.mainSearch = document.createElement("div");
        this.mainSearch.style.marginTop = "30px";
        this.main.appendChild(this.mainSearch);

        this.mainSearchForm = document.createElement("form");
        this.main.appendChild(this.mainSearchForm);

        this.mainSearchFormBar = document.createElement("input");
        this.mainSearchForm.appendChild(this.mainSearchFormBar);



        console.log(this.app);

        console.log("Fim criacao de elementos");
    }
},

    };

    console.log(App);

    App.init();

console.log("Fim do codigo JavaScript");

