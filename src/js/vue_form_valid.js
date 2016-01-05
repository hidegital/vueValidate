Vue.use(window["vue-validator"]);

//$(function() {
//    $('.validation').css('visibility','visible');
//});

var entryForm = new Vue({
    el: "#nameForm",
    data: {
        /*entry*/
        name: "",
        kana: "",
        email: "",
        tel: "",
        school: "",
        undergraduate: "",
        graduation: "",
        selectPref:"",
        select:"",
        birthday:"",
        picked:"",
        pr    :"",
        submitFlg: false,
        checkFlg: {
            name: true,
            kana: true,
            email: true,
            tel: true,
            school: true,
            undergraduate: true,
            graduation: true,
            select:true
        }
    },
    validator: {
        validates: {
            email: function (val) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
            },
            match: function (val) {
                return val == this.email;
            },
            zenkakuHiragana: function (val) {
                return /^([ぁ-ん]+)$/.test(val);
            },
            zenkakuKatakana: function (val) {
                return /^([ァ-ヶー]+)$/.test(val);
            },
            hankakuChara: function (val) {
                return /^([a-zA-z¥s]+)$/.test(val);
            },
            keitaiNum: function (val) {
                return /^0¥d0-¥d{4}-¥d{4}$/.test(val);
            },
            isNum: function (val) {
                return /^([0-9])+$/.test(val);
            },
            postNum: function (val) {
                return /^¥d{3}¥-¥d{4}$/.test(val);
            }
        }
    },
    methods: {
        /*entry用*/
        onCheckName: function () {
            this.checkFlg.name = true;
            if (this.name.length === 0) {
                this.checkFlg.name = false;
            }
        },
        onCheckKana: function () {
            this.checkFlg.kana = true;
            if (this.kana.length === 0) {
                this.checkFlg.kana = false;
            }
        },
        onCheckMail: function () {
            this.checkFlg.email = true;
            if (this.email.length === 0) {
                this.checkFlg.email = false;
            }
        },
        onCheckTel: function () {
            this.checkFlg.tel = true;
            if (this.tel.length === 0) {
                this.checkFlg.tel = false;
            }
        },
        onCheckSchool: function () {
            this.checkFlg.school = true;
            if (this.school.length === 0) {
                this.checkFlg.school = false;
            }
        },
        onCheckUndergraduate: function () {
            this.checkFlg.undergraduate = true;
            if (this.undergraduate.length === 0) {
                this.checkFlg.undergraduate = false;
            }
        },
        onCheckGraduation: function () {
            this.checkFlg.graduation = true;
            if (this.graduation.length === 0) {
                this.checkFlg.graduation = false;
            }
        },
        onCheckSelect: function () {
            this.checkFlg.select = true;
            if (this.select.length === 0) {
                this.checkFlg.select = false;
            }
        },
        onCheckMailConfirm: function () {
            this.checkFlg.emailConfirm = true;
            if (this.emailConfirm.length === 0) {
                this.checkFlg.emailConfirm = false;
            }
        },
        onCheckFlg: function () {
            this.submitFlg = true;
            for (var key in this.checkFlg) {
                if (!this.checkFlg[key]) {
                    this.submitFlg = false
                }
            }
        },
        onDisableSubmitEntry: function(){
            this.email = "";
            this.emailConfirm = "";
            this.name = "";
            this.kana = "";
            this.tel = "";
            this.school = "";
            this.undergraduate = "";
            this.graduation = "";
            this.select ="";
            this.submitFlg = false;
            for (var key in this.checkFlg) {
               this.checkFlg[key] = true;
            }
        },
        onDisableSubmitBlog: function(){
            this.blogSubmitFlg = false;
            for (var key in this.blog) {
                this.blog[key] = "";
            }
            for (var key in this.blogCheckFlg) {
                this.blogCheckFlg[key] = true;
            }
        }
    }
});


var blogForm = new Vue({
    el: "#blogForm",
    data: {
        blogSubmitFlg: false,
        name: "",
        question: "",
        blogCheckFlg: {
            name: true,
            question: true
        }
    },
    methods: {
        onBlogCheckName: function () {
            this.blogCheckFlg.name = true;
            if (this.name.length === 0) {
                this.blogCheckFlg.name = false;
            }
        },
        onBlogCheckQuestion: function () {
            this.blogCheckFlg.question = true;
            if (this.question.length === 0) {
                this.blogCheckFlg.question = false;
            }
        },
        onBlogCheckFlg: function () {
            this.blogSubmitFlg = true;
            for (var key in this.blogCheckFlg) {
                if (!this.blogCheckFlg[key]) {
                    this.blogSubmitFlg = false;
                }
            }
        },
        checkValid: function(){
            console.log(valid);
        }
    }
});

var otherForm = new Vue({
    el: "#otherForm",
    data: {
        otherSubmitFlg: "",
        name: "",
        kana: "",
        email: "",
        tel: "",
        question: "",
        otherCheckFlg: {
            name: true,
            kana: true,
            email: true,
            tel: true,
            question: true
        }
    },
    validator: {
        validates: {
            email: function (val) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
            },
            match: function (val) {
                return val == this.email;
            },
            zenkakuHiragana: function (val) {
                return /^([ぁ-ん]+)$/.test(val);
            },
            zenkakuKatakana: function (val) {
                return /^([ァ-ヶー]+)$/.test(val);
            },
            hankakuChara: function (val) {
                return /^([a-zA-z¥s]+)$/.test(val);
            },
            keitaiNum: function (val) {
                return /^0¥d0-¥d{4}-¥d{4}$/.test(val);
            },
            isNum: function (val) {
                return /^([0-9])+$/.test(val);
            },
            postNum: function (val) {
                return /^¥d{3}¥-¥d{4}$/.test(val);
            }
        }
    },
    methods: {
        onOtherCheckName: function () {
            this.otherCheckFlg.name = true;
            if (this.name.length === 0) {
                this.otherCheckFlg.name = false;
            }
        },
        onOtherCheckKana: function () {
            this.otherCheckFlg.kana = true;
            if (this.kana.length === 0) {
                this.otherCheckFlg.kana = false;
            }
        },
        onOtherCheckMail: function () {
            this.otherCheckFlg.email = true;
            if (this.email.length === 0) {
                this.otherCheckFlg.email = false;
            }
        },
        onOtherCheckTel: function () {
            this.otherCheckFlg.tel = true;
            if (this.tel.length === 0) {
                this.otherCheckFlg.tel = false;
            }
        },
        onOtherCheckQuestion: function () {
            this.otherCheckFlg.question = true;
            if (this.question.length === 0) {
                this.otherCheckFlg.question = false;
            }
        },
        onOtherCheckFlg: function () {
            this.otherSubmitFlg = true;
            for (var key in this.otherCheckFlg) {
                if (!this.otherCheckFlg[key]) {
                    this.otherSubmitFlg = false;
                }
            }
        }
    }
});


