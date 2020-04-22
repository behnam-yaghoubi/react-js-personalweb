import PostImage from '../assets/images/post.jpg';

export default {
    name: "بهنام یعقوبی",
    Menu: {
        home: "خانه",
        about: "درباره من",
        resume: "رزومه",
        portfolios: "نمونه کارها",
        contact: "تماس با ما"
    },
    Home: {
        wellcomeMsg: " سلام من",
        wellcomeMsg2: " هستم",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی "
    },
    about: {
        aboutMe: "درباره من",
        fullname: "نام و نام خانوادگی",
        age: "سن",
        nationality: "ملیت",
        languages: "زبان",
        addres: "آدرس",
        phone: "تلفن تماس",
        years:"سال",
        iranian: "ایرانی",
        language: "انگلیسی, فارسی",
        addres2:"تهران, یادگار",
        downloadcv:"دانلود رزومه"
    },
    services: {
        service: "سرویس ها",
        title: {
            webdesign: "طراحی وب",
            webdevelopment: "توسعه وب",
            mobileapplication: "طراحی اپلیکیشن موبایل"
        },
        description: {
            des1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            des3: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
            des2: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        }
    },
    resumePage: {
        myskills: "مهارت ها",
        myresume: "رزومه"
    },
    workingSteps :[
    {
        id: -1,
        date: "",
        title: "",
        subtitle: "",
        content: ""
    },
    {
        id: 0,
        date: "1396-1398",
        title: "طراحی فرانت اند",
        subtitle: "شرکت آرمان گستر",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 1,
        date: "1396-1398",
        title: "برنامه نویسی بک اند",
        subtitle: "شرکت دیجی گستر",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: -2,
        date: "",
        title: "",
        subtitle: "",
        content: ""
    }],
    educationalSteps :[
    {
        id: -1,
        date: "",
        title: "",
        subtitle: "",
        content: ""
    },
    {
        id: 0,
        date: "1396-1398",
        title: "کارشناسی ارشد",
        subtitle: "دانشگاه تهران",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 1,
        date: "1396-1398",
        title: "کارشناسی",
        subtitle: "دانشگاه تهران",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 2,
        date: "1396-1398",
        title: "دبیرستان",
        subtitle: "تهران",
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: -2,
        date: "",
        title: "",
        subtitle: "",
        content: ""
    }],
    workingexperience:"تجربه های کاری",
    educationalqualifications:"مدارک تحصیلی",
    contactpage:{
        contact: "تماس با من",
        getintouch:"ارسال پیام به من",
        enteryourname:"نام خود را وارد کنید",
        enteryouremail:"ایمیل خود را وارد کنید",
        enteryoursubject:"موضوع را وارد کنید",
        enteryourmessage:"پیغام خود را اینجا بنویسید",
        sendmessage:"ارسال پیام",
        phone:"تلفن",
        email:"ایمیل",
        address:"آدرس",
        addressDetail:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    portfoliopage:{
        portfolioslist : [
            {id:1, href:"#", image:PostImage, title:"آموزش ریکت جی اس", desc:"مدرس ریکت جی اس"},
            {id:2, href:"#", image:PostImage, title:"آموزش نود جی اش", desc:"مدرس نود جی اس"},
            {id:3, href:"#", image:PostImage, title:"آموزش جاوا اسکریپت", desc:"مدرس جاوا اسکریپت"},
            {id:4, href:"#", image:PostImage, title:"آموزش پی اچ پی", desc:"مدرس پی اچ پی"},
            {id:5, href:"#", image:PostImage, title:"آکوزش ویو جی اس", desc:"مدرس ویو جی اس"},
            {id:6, href:"#", image:PostImage, title:"آموزش", desc: "مدرس الکترونیک"}
        ]
    }

}