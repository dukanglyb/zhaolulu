/**
 * 网站通用部分
 */
define("comm", function (require, exports, module) {

    var $ = require("jquery");
    var validateIDNumber = require("validateIDNumber");

    var fn = {
        /**
         * 校验一个字符串是否为手机号，不是手机号返回false
         * @param phone
         * @returns {boolean}
         */
        validatePhone: function (phone) {
            //var isPhone = /^(?:13\d|15\d|18\d|17\d)\d{5}(\d{3}|\*{3})$/;
            var isPhone = /^(1[3|4|5|7|8])[\d]{9}$/;
            var lenghtPhone = /^\d{11}$/;
            if (fn.isNull(phone) && isPhone.test(phone) && lenghtPhone.test(phone)) {
                return true;
            }

            return false;
        },
        /**
         * 校验验证码，不是6位数字返回false
         * @param code
         * @returns {boolean}
         */
        validateCode: function (code) {
            var isCode = /^\d{6}$/;
            if (fn.isNull(code) && isCode.test(code)) {
                return true;
            }

            return false;
        },
        /**
         * 校验一个字符串是否为空，为空返回false
         * @param obj
         * @returns {boolean}
         */
        isNull: function (obj) {
            if(typeof obj == "number"){
                return true;
            }else if(obj != null && obj != "" && obj != undefined && obj.length > 0) {
                return true;
            }
            return false;
        },
        validateUserName: function (userName) {
            var reg = /^[a-zA-Z0-9_]{8,16}$/;
            if (fn.isNull(userName)) {
                if (reg.test(userName)) {
                    return true;
                }
            }
            return false;
        },
        /**
         * 验证是否为电子邮箱
         * @param email
         */
        validateEmail: function (email) {
            var isEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (fn.isNull(email) && isEmail.test(email)) {
                return true;
            }
            return false;
        },
        /**
         * 获取当前日期
         */
        getDate: function (partten) {
            var date = new Date();
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            if (!fn.isNull(partten)) {
                partten = 'y-m-d';
            }
            var r = partten.replace(/y+/gi, y);
            r = r.replace(/m+/gi, (m < 10 ? "0" : "") + m);
            r = r.replace(/d+/gi, (d < 10 ? "0" : "") + d);
            return r;
        },
        /**
         * N秒后跳转到指定URL
         * @param time
         */
        skipIndex: function (url, time) {
            function timer() {
                if (time == 0 || time == undefined || time == "" || time == null) {
                    window.location.replace(url);
                    return;
                } else {
                    time--;
                    setTimeout(function () {
                        timer();
                    }, 1000);

                }
            }

            timer();
        },
        /**
         * ajax封装
         * url 发送请求的地址
         * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
         * type 请求方式("POST" 或 "GET")， 默认为 "get"
         * successfn 成功回调函数
         * errorfn 失败回调函数
         * option 扩充ajax参数，所有其他的$ajax方法可以扩充至option中，如dataType和async
         * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
         * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
         *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
         */
        ajax: function (url,type, data, successfn, errorfn ,option) {
            type = (type == null || type == "" || typeof(type) == "undefined") ? "get" : type;
            data = (data == null || data == "" || typeof(data) == "undefined") ? {"date": new Date().getTime()} : data;
            var ajaxparams = {
                type: type,
                data: data,
                url:url,
                success: function (data, textStatus) {
                    console.info('===============================================');
                    console.info('AjaxSuccess:'+url);
                    console.info('===============================================');
                    console.info(data);
                    if (typeof successfn === "function") {
                        successfn(data, textStatus);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.error('===============================================');
                    console.error('AjaxError:'+url);
                    console.error('===============================================');
                    console.error(XMLHttpRequest);
                    console.error(errorThrown);
                    console.error(textStatus);
                    console.error(data);
                    console.error(XMLHttpRequest.responseText);
                    if (typeof errorfn === "function") {
                        errorfn(XMLHttpRequest, textStatus, errorThrown);
                    }
                }
            };
            ajaxparams= $.extend(ajaxparams,option);
            ajaxparams.dataType = ajaxparams.dataType || "json";
            $.ajax(ajaxparams);
        },
        /**
         * post封装
         * url 发送请求的地址
         * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
         * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
         *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
         * type 请求方式("POST" 或 "GET")， 默认为 "Post"
         * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
         * successfn 成功回调函数
         * errorfn 失败回调函数
         */
        post: function (url, data, successfn, errorfn) {
            $.ajax({
                type: "post",
                data: data,
                url: url,
                dataType: "json",
                success: function (d) {
                    if (typeof successfn === "function") {
                        successfn(d);
                    }
                },
                error: function (e) {
                    if (typeof errorfn === "function") {
                        errorfn(e);
                    }

                }
            });
        },
        /**
         * 文本框输入成功的样式
         * @param obj
         */
        inputSuccess: function (obj) {
            $(obj).removeClass("input-error").addClass("input-success");
        },
        /**
         * 文本框输入失败的样式
         * @param obj
         */
        inputError: function (obj) {
            $(obj).removeClass("input-success").addClass("input-error");
        },
        /**
         * 移除文本框输入成功或者失败的样式
         * @param obj
         */
        inputNormal: function (obj) {
            $(obj).removeClass("input-error").removeClass("input-success");
        },
        /***
         * 使用webuploader控件上传文件生成缩略图初始化方法
         * @param fileList 图片缩略图存放容器
         * @param filePicker 选择图片按钮
         * @param imgWidth 图片缩略图宽
         * @param imgHeight 图片缩略图高
         * @param imageStyle 缩略图自定义样式类名
         * @param serverPath 图片上传地址
         * @param fileValName 文件上传域的name，可以不传，默认为'file'
         * @param isAuto 是否自动上传，可以不传，默认为false，true为自动上传，false为不自动上传
         *
         */
        imageUploaderFile: function (fileList, filePicker, imgWidth, imgHeight, imageStyle, serverPath, fileValName, isAuto) {
            var $list = $(fileList);
            // 优化retina, 在retina下这个值是2
            var ratio = window.devicePixelRatio || 1;
            // 缩略图大小243/2  153/2
            var thumbnailWidth = imgWidth * ratio;
            var thumbnailHeight = imgHeight * ratio;
            if (!fileValName) {
                fileValName = "file";
            }
            if (!isAuto) {
                isAuto = false;
            }
            // 初始化Web Uploader
            var uploader = WebUploader.create({

                // 自动上传。默认值为False
                auto: isAuto,

                // swf文件路径
                swf: '/public/dep/webupload/Uploader.swf',

                // 文件接收服务端。
                server: serverPath,

                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: filePicker,
                thumb:{
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 100,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    //allowMagnify: false,
                    // 是否允许裁剪。
                    crop: false,
                    type: ''
                },
                compress: false,
                fileVal: fileValName,
                // 只允许选择文件，可选。
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                }
            });

            // 当有文件添加进来的时候
            uploader.on('fileQueued', function (file) {
                var $li = $(
                        '<div id="' + file.id + '" class="file-item ' + imageStyle + '">' +
                        '<img>' +
                        '<div class="info">' + file.name + '</div>' +
                        '</div>'
                    ),
                    $img = $li.find('img');

                $list.append($li);

                // 创建缩略图
                uploader.makeThumb(file, function (error, src) {
                    if (error) {
                        $img.replaceWith('<span>不能预览</span>');
                        return;
                    }

                    $img.attr('src', src);
                }, thumbnailWidth, thumbnailHeight);
            });
            return uploader;
        },
        /**
         * 校验WebUpload上传控件是否上传附件，否则为其按钮添加红色提示样式
         * @param fileList
         * @param filePicker
         * @returns {boolean}
         */
        isWebUploadScanFilesNull: function (fileList, filePicker) {
            var filePicker = $(filePicker);
            var fileList = $(fileList);
            if (fileList.children('div').length !== 0) {
                fn.inputSuccess(filePicker);
                return true;
            } else {
                fn.inputError(filePicker);
                return false;
            }
        },
        /**
         * 发送验证码发验证码倒计时按钮
         * @param btn 按钮
         * @param time  倒计时的时间,秒为单位
         */
        sendCodeTimer: function (btn, time) {
            function timer() {
                if (time == 0) {
                    btn.removeAttr("disabled");
                    btn.val("重新获取");
                    return;
                } else {
                    time--;
                    btn.attr("disabled", "disabled");
                    btn.val(time + "秒");
                    setTimeout(function () {
                        timer();
                    }, 1000);

                }
            }

            timer();
        },
        userSymbolType: function (str) {
            var count = 0;
            var numReg = /\d+/;
            var charReg = /[a-zA-Z]+/;
            var allCharReg = /^[A-Za-z]+$/;
            var chinese = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
            var userName = /^[a-zA-Z0-9_]{1,16}$/;
            if (fn.isNull(str)) {
                var symbol = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '/', ' '];

                for (var i = 0; i < symbol.length; i++) {
                    if (str.indexOf(symbol[i]) >= 0) {
                        return -1;
                    }
                }

                if (str.indexOf("_") >= 0) {
                    count++;
                }

                if (numReg.test(str)) {
                    count++;
                }
                if (charReg.test(str)) {
                    count++;
                }

                if (allCharReg.test(str)) {
                    return 2;
                }

                if (chinese.test(str)) {
                    return -1;
                }

                if (!userName.test(str)) {
                    return -1;
                }

                return count;
            }
            return -1;
        },
        /**
         * 密码校验强度校验
         * @param str
         * @returns {number}
         */
        pwdSymbolType: function (str) {
            var count = 0;
            var symbolCount = 0
            var numReg = /\d+/;
            var charReg = /[a-zA-Z]+/;
            var pwd = /(?!^\d+$)(?!^[a-zA-Z]+$)(?!^[^\da-zA-Z]+$)^.+$/;
            if (fn.isNull(str)) {
                var symbol = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '/', '_', '\\', '|', '[', ']', '{', '}', ':', ';', '\'', '\"', '<', '>', ',', '.', '?'];

                for (var i = 0; i < symbol.length; i++) {
                    if (str.indexOf(symbol[i]) >= 0) {
                        symbolCount++;
                    }
                }

                if (symbolCount > 0) {
                    count++;
                }

                if (str.indexOf(" ") >= 0) {
                    return -1;
                }

                if (numReg.test(str)) {
                    count++;
                }
                if (charReg.test(str)) {
                    count++;
                }
                if (!pwd.test(str)) {
                    return -1;
                }

                return count;
            }
            return -1;
        },
        /**
         * 错误信息赋值
         * @param obj .error对象
         * @param code  错误码
         * @param message  错误提示信息
         */
        errorMsg: function (obj, code, message) {
            obj.css({
                'display': 'inline'
            }).animate({
                overflow: 'visible',
                position: 'relative'
            });
            obj.attr("data-errorcode", code);
            obj.html("").html(message);
        },
        /**
         * 错误信息清除
         * @param obj .error对象
         */
        errorMsgClear: function (obj) {
            obj.css({
                'display': 'none'
            }).animate({
                overflow: 'hidden',
                position: 'relative'
            });
            obj.attr("data-errorcode", "");
            obj.html("");
        },
        /**
         * 校验身份证号码
         * @param event
         * @returns {boolean}
         */
        checkIDNumber: function (IDNumber) {
            var IDNumber = $(IDNumber);
            if (fn.isNull(IDNumber.val())) {
                if (validateIDNumber.checkIdCardNo(IDNumber.val())) {
                    fn.inputSuccess(IDNumber);
                    return true;
                } else {
                    fn.inputError(IDNumber);
                    return false;
                }
            } else {
                fn.inputError(IDNumber);
                return false;
            }
        },
        /**
         * 参数错误处理方法
         * @param obj
         * @param data
         */
        parameterError: function (obj, data) {
            if (data.zhuangTaiMa === "-1") {
                var xysj = data.xiangYingShuJu;
                if (xysj) {
                    var xysjErr = xysj.constraintViolations[0];
                    if (xysjErr) {
                        fn.errorMsg(obj, data.zhuangTaiMa, xysjErr.message);
                        return;
                    }
                }
            } else {
                fn.errorMsg(obj, data.zhuangTaiMa, data.tiShiXinXi);
                return;
            }
        },
        /**
         * 初始化jquery.form 上传文件控件
         * 调用该方法请使用Post传参其他方式不支持
         * @param btnID
         * @param imgdiv
         * @param imgShow
         * @constructor
         */
        uploadSingleImage: function (btnID, imgdiv, imgShow) {
            new uploadPreview({
                UpBtn: btnID,
                DivShow: imgdiv,
                ImgShow: imgShow
            });
        },
        /**
         * 预览信息照片赋值
         * @param imgShow
         * @param previewImg
         */
        findImage:function(imgShow,previewImg){
            var imgSrc=$(imgShow).prop("src");

            $(previewImg).attr("src",imgSrc);
        },
        /**
         * 校验输入法只能输入数字和小数点而且仅有一个小数点
         * */
        containsDecimalNumber: function (domInput) {
            $(domInput).css("ime-mode", "disabled");
            $(domInput).bind("keypress", function (e) {
                var code = (e.keyCode ? e.keyCode : e.which); //兼容火狐 IE
                if (!$.support && (e.keyCode == 0x8)) //火狐下 不能使用退格键
                {
                    return;
                }
                return code >= 48 && code <= 57 || code == 46;
            });
            $(domInput).bind("blur", function () {
                if (this.value.lastIndexOf(".") == (this.value.length - 1)) {
                    this.value = this.value.substr(0, this.value.length - 1);
                } else if (isNaN(this.value)) {
                    this.value = "";
                }
            });
            $(domInput).bind("paste", function () {
                var s = clipboardData.getData('text');
                if (!/\D/.test(s));
                this.value = s.replace(/^0*/, "");
                return false;
            });
            $(domInput).bind("dragenter", function () {
                return false;
            });
            $(domInput).bind("keyup", function () {
                this.value = this.value.replace(/[^\d.]/g, "");
                //必须保证第一个为数字而不是.
                this.value = this.value.replace(/^\./g, "");
                //保证只有出现一个.而没有多个.
                this.value = this.value.replace(/\.{2,}/g, ".");
                //保证.只出现一次，而不能出现两次以上
                this.value = this.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            });
        },
        /**
         * 校验输入法只能输入数字不包含小数点
         **/
        onlyInteger: function (inputID) {
            $(inputID).css("ime-mode", "disabled");

            $(inputID).bind("keypress", function (e) {

                var code = (e.keyCode ? e.keyCode : e.which);  //兼容火狐 IE

                if (!$.support && (e.keyCode == 0x8))  //火狐下不能使用退格键
                {
                    return;
                }
                return code >= 48 && code <= 57;

            });

            $(inputID).bind("blur", function () {

                if (this.value.lastIndexOf(".") == (this.value.length - 1)) {

                    this.value = this.value.substr(0, this.value.length - 1);

                } else if (isNaN(this.value)) {

                    this.value = "";

                }

            });

            $(inputID).bind("paste", function () {

                var s = clipboardData.getData('text');

                if (!/\D/.test(s));

                value = s.replace(/^0*/, '');

                return false;

            });

            $(inputID).bind("dragenter", function () {

                return false;

            });

            $(inputID).bind("keyup", function () {

                if (this.value.lastIndexOf(".") == (this.value.length - 1)) {

                    this.value = this.value.substr(0, this.value.length - 1);

                } else if (isNaN(this.value)) {

                    this.value = "";

                }

                if (/(^0+)/.test(this.value)) {

                    this.value = this.value.replace(/^0*/, '');

                }

            });
        },
        /**
         * 获取文件服务器的地址
         * @returns {string}
         */
        getFileServer: function () {
            return "http://10.10.101.33:7500/v1/tfs/";
        },
        /**
         * 校验开户银行代码
         * @param val
         * @returns {boolean}
         */
        bankCode: function (val) {
            var Rex = /^\d{1,3}$/;
            var input = $(val);
            if (fn.isNull(input) && Rex.test(input.val())) {
                fn.inputSuccess(input);
                return true;
            } else {
                fn.inputError(input);
                return false;
            }
        },
        /**
         * 校验只能输入
         * 匹配非负整数（正整数 + 0）
         * @param val
         * @returns {boolean}
         */
        onlyNumber: function (val) {
            var Rex = /^[1-9]\d*|0$/;
            if (Rex.test(val)) {
                return true;
            }
            return false;
        },

        /**
         * 获取session中的数据
         * 返回值：session对象
         * */
        getSession: function () {
            var ret;

            if(window.sessionStorage){
                if(sessionStorage.getItem("getSession")){
                    var cache = sessionStorage.getItem("getSession");
                    if(fn.isNull(cache)){
                        ret = JSON.parse(cache);
                        return ret;
                    }
                }
            }

            this.ajax("/manager/session","get",null,function (data) { //成功后返回的数据
                if (data.zhuangTaiMa >= 0) {
                    ret =  data.xiangYingShuJu;
                    if(window.sessionStorage){
                        sessionStorage.setItem("getSession",JSON.stringify(data.xiangYingShuJu));
                    }
                }
                else {
                    console.log("错误码：" + data.zhuangTaiMa + "错误信息：" + data.tiShiXinXi);
                    ret = "";
                }
            },function (XMLHttpRequest) {
                console.log(XMLHttpRequest);
                ret = ""
            },{async:false});
            return ret;
        },
        /**
         * 将表单数据格式为Json并封装为Data
         * @param formID
         * @returns {{}}
         */
        serializeJson:function(formID){
            var form=$(formID);
            var serializeObj={};
            var array=form.serializeArray();
            var str=form.serialize();
            $(array).each(function(){
                if(serializeObj[this.name]){
                    if($.isArray(serializeObj[this.name])){
                        serializeObj[this.name].push(this.value);
                    }else{
                        serializeObj[this.name]=[serializeObj[this.name],this.value];
                    }
                }else{
                    serializeObj[this.name]=this.value;
                }
            });
            return serializeObj;
        },

        switchBtn: function () {
            $(".switch").each(function (index, docEle) {
                var on = $(docEle).attr("data-on");
                var off = $(docEle).attr("data-off");
                var checkbox = $(docEle).find("input[type=checkbox]");
                $(docEle).append("<div class='switch-box'><div class='text1'>" + on + "</div><div class='text2'>" + off + "</div><div class='text1'>" + off + "</div></div>");
                var switchLength = $($(docEle).find(".text1")[0]).outerWidth() + $($(docEle).find(".text2")[0]).outerWidth();
                var switchBoxLength = $($(docEle).find(".text1")[0]).outerWidth() + $($(docEle).find(".text2")[0]).outerWidth() + $($(docEle).find(".text1")[1]).outerWidth();
                $(docEle).css("width", 78);
                $(docEle).find(".switch-box").css("width", 120);
                $(docEle).find(".switch-box div").each(function (index, subdocEle) {
                    $(subdocEle).click(function () {
                        if (checkbox[0].checked) {
                            var text1width = $(docEle).find(".text1")[0].scrollWidth;
                            $(docEle).find(".switch-box").animate({marginLeft: -text1width}, 100);
                            checkbox[0].checked = !checkbox[0].checked;
                            $(docEle).find(".text2").text(on);
                        } else {
                            $(docEle).find(".switch-box").animate({marginLeft: "0"}, 100);
                            checkbox[0].checked = !checkbox[0].checked;
                            $(docEle).find(".text2").text(off);
                        }
                    });
                });
            });
        },
        /**
         * 创建分页控件
         * @param container:控件容器,只能是ID
         * @param currentPage:当前页
         * @param totalPage:总页数
         * @param fn:回调函数(当前页,总页数)
         */
        pageNav: function (container, currentPage, totalPage, fn) {
            var container = typeof container == "string" ? $(container) : container;
            currentPage = parseInt(currentPage);
            totalPage = parseInt(totalPage);
            var pageNav = {
                _builderHtml: function (currentPage, totalPage) {
                    if (!isNaN(totalPage) && totalPage > 0) {
                        var pageHtml = "";
                        pageHtml = pageHtml + "<input type='button' data-page='pre' class='btn btn-pager' value='&laquo;'>";
                        if (totalPage <= 7) {
                            for (var i = 1; i <= totalPage; i++) {
                                if (i == currentPage) {
                                    pageHtml += "<input type='button' data-page='" + i + "' data-shownum='" + i + "' class='btn btn-pager active' value='" + i + "'>";
                                } else {
                                    pageHtml += "<input type='button' data-page='" + i + "' data-shownum='" + i + "' class='btn btn-pager' value='" + i + "'>";
                                }

                            }
                        } else if (totalPage > 7) {
                            if (currentPage > 3 && currentPage + 3 < totalPage) {
                                pageHtml += "<input type='button' data-page='1' data-shownum='1' class='btn btn-pager' value='1'/>";
                                pageHtml += "<input type='button' data-page='...'  class='btn btn-pager' value='...' disabled='disabled'/>";
                                pageHtml += "<input type='button' data-page='" + (currentPage - 1) + "' data-shownum='" + (currentPage - 1) + "' class='btn btn-pager' value='" + (currentPage - 1) + "'/>";
                                pageHtml += "<input type='button' data-page='" + currentPage + "' data-shownum='" + currentPage + "' class='btn btn-pager active' value='" + currentPage + "'/>";
                                pageHtml += "<input type='button' data-page='" + (currentPage + 1) + "' data-shownum='" + (currentPage + 1) + "' class='btn btn-pager' value='" + (currentPage + 1) + "'/>";
                                pageHtml += "<input type='button' data-page='...'   class='btn btn-pager' value='...' disabled='disabled'/>";
                                pageHtml += "<input type='button' data-page='" + totalPage + "' data-shownum='" + totalPage + "' class='btn btn-pager' value='" + totalPage + "'/>";
                            } else if (currentPage + 3 == totalPage) {
                                pageHtml += "<input type='button' data-page='1' data-shownum='1' class='btn btn-pager' value='1'/>";
                                pageHtml += "<input type='button' data-page='...'class='btn btn-pager' value='...' disabled='disabled'/>";
                                pageHtml += "<input type='button' data-page='" + (currentPage - 1) + "' data-shownum='" + (currentPage - 1) + "' class='btn btn-pager' value='" + (currentPage - 1) + "'/>";
                                pageHtml += "<input type='button' data-page='" + currentPage + "' data-shownum='" + currentPage + "' class='btn btn-pager active' value='" + currentPage + "'/>";
                                pageHtml += "<input type='button' data-page='" + (currentPage + 1) + "' data-shownum='" + (currentPage + 1) + "' class='btn btn-pager' value='" + (currentPage + 1) + "'/>";
                                pageHtml += "<input type='button' data-page='" + (currentPage + 2) + "' data-shownum='" + (currentPage + 2) + "' class='btn btn-pager' value='" + (currentPage + 2) + "'/>";
                                pageHtml += "<input type='button' data-page='" + totalPage + "' data-shownum='" + totalPage + "' class='btn btn-pager' value='" + totalPage + "'/>";
                            } else if (currentPage + 3 > totalPage) {
                                pageHtml += "<input type='button' data-page='1' data-shownum='1' class='btn btn-pager' value='1'/>";
                                pageHtml += "<input type='button' data-page='...'class='btn btn-pager' value='...' disabled='disabled'/>";
                                for (var i = 4; i >= 0; i--) {
                                    if (currentPage == totalPage - i) {
                                        pageHtml += "<input type='button' data-page='" + (totalPage - i) + "' data-shownum='" + (currentPage - 1) + "' class='btn btn-pager active' value='" + (totalPage - i) + "'/>";
                                    } else {
                                        pageHtml += "<input type='button' data-page='" + (totalPage - i) + "' data-shownum='" + (currentPage - 1) + "' class='btn btn-pager' value='" + (totalPage - i) + "'/>";
                                    }

                                }
                            } else if (currentPage <= 3) {
                                for (var i = 1; i <= 5; i++) {
                                    if (i == currentPage) {
                                        pageHtml += "<input type='button' data-page='" + i + "' data-shownum='" + i + "' class='btn btn-pager active' value='" + i + "'/>";
                                    } else {
                                        pageHtml += "<input type='button' data-page='" + i + "' data-shownum='" + i + "' class='btn btn-pager' value='" + i + "'/>";
                                    }

                                }

                                pageHtml += "<input type='button' data-page='...'  class='btn btn-pager' value='...' disabled='disabled'/>";
                                pageHtml += "<input type='button' data-page='" + totalPage + "' data-shownum='" + totalPage + "' class='btn btn-pager' value='" + totalPage + "'/>";
                            }
                        }
                        pageHtml += "<input type='button' data-page='next' class='btn btn-pager' value='&raquo;'>";
                        pageHtml += "<input type='text'  class='form-control input-page pageNum'>";
                        pageHtml += "<input type='button' data-page='go' class='btn btn-pager-go' value='go'>";

                        return pageHtml;
                    }

                },
                _bindClick: function () {
                    container.empty().html(this._builderHtml(currentPage, totalPage));
                    container.find("input[type=button]").each(function (index, docEle) {
                        $(docEle).on("click", function () {
                            var page = $(docEle).data("page");
                            if (page == "pre") {
                                currentPage = currentPage - 1 == 0 ? 1 : currentPage - 1;
                                fn(currentPage, totalPage);
                            } else if (page == "next") {
                                currentPage = currentPage + 1 >= totalPage ? totalPage : currentPage + 1;
                                fn(currentPage, totalPage);
                            } else if (page == "go") {
                                var goPage = parseInt(container.find("input[type=text]").val());
                                goPage = goPage == 0 ? 1:goPage;
                                if (goPage <= totalPage) {
                                    fn(goPage, totalPage);
                                }
                            } else {
                                fn(page, totalPage);
                            }
                        });
                    })
                }
            };
            container.html(pageNav._bindClick());
            $(".pageNum").each(function(index,docEle){
                $(docEle).keypress(function (event) {
                    var eventObj = event || e;
                    var keyCode = eventObj.keyCode || eventObj.which;
                    if ((keyCode >= 48 && keyCode <= 57) || keyCode==8){
                        if(keyCode == 8){
                            if (navigator.userAgent.indexOf('Firefox') >= 0) {
                                var value = $(docEle).val().toString();
                                if(comm.isNull(value) && value.length>0){
                                    $(docEle).val(value.substring(0,value.length-1));
                                }
                            }
                            return false;
                        }
                        return true;
                    }else{
                        return false;
                    }

                }).focus(function () {
                    //禁用输入法
                    this.style.imeMode = 'disabled';
                }).on("paste", function () {
                    //获取剪切板的内容
                    var clipboard = window.clipboardData.getData("Text");
                    if (/^\d+$/.test(clipboard)){
                        return true;
                    }else{
                        return false;
                    }
                }).on("keyup",function(){
                    this.value = this.value.replace(/[^\d]/g, "");
                    //必须保证第一个为数字而不是.

                    this.value = this.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                });
            });

        },
        /**
         * 数字转化为每3位1个逗点----程媛媛
         */
        format_num:function (num) {
            var arr = String(num).split('.');
            var p1 = arr[0].replace(/(\d)(?=(\d{3})+$)/g, '$1' + ",");
            return p1 + (arr[1] ? '.' + arr[1] : '');
        },
        /**
         * 日期转换成unix时间戳,支持（yyyy-mm-dd||yyyy/mm/dd）
         * @param str
         * @returns {number}
         * @author zhangxiaoda
         */
        dateToUnix:function(str){
            if(fn.isNull(str) && typeof str == "string"){
                if(str.indexOf("-")>-1){
                    str = str.replace(/-/g,'/');
                }
                var date = new Date(str);
                return date.getTime()/1000;
            }
        },
        /**
         * 提示信息n秒钟后消失
         */
        timeOutHide:function(container,msg,time,flag){
            if(fn.isNull(flag) && flag.toUpperCase() == "Y"){
                flag = "alert-success";
            }else{
                flag = "alert-danger"
            }
            $(container).show().html(msg).addClass(flag);
            setTimeout(function(){
                $(container).hide().empty();
            },time);
        },
        /**
         * 业务字典转换成select下拉菜单.
         */
        dmbToSelect: function () {
            $("select[data-dict]").each(function (index, selectEle) {
                if ($(selectEle).find("option").length > 0) return;

                var dmbid = $(selectEle).data("dict");
                var dmbValue = $(selectEle).data("value");
                var nulllabel = $(selectEle).data("nulllabel");
                var nullvalue = $(selectEle).data("nullvalue");
                var remove = $(selectEle).data("remove");
                var cookData = $.cookie(dmbid);
                if (cookData) {
                    cookData = JSON.parse(cookData);
                    fn.buildDictSelectOption(selectEle, dmbValue, cookData,nulllabel,nullvalue);
                } else {
                    if (fn.isNull(dmbid)) {
                        var url = "";
                        if(remove){
                            url = "/manager/dm/remove/" + dmbid+"/"+remove;
                        }else{
                            url = "/manager/dm/" + dmbid;
                        }
                        $.ajax({
                            url: url,
                            type: "get",
                            cache: true,
                            success: function (data) {
                                if (data && data.zhuangTaiMa > -1 && data.xiangYingShuJu.length > 0) {
                                    $.cookie(dmbid, JSON.stringify(data.xiangYingShuJu));

                                    fn.buildDictSelectOption(selectEle, dmbValue, data.xiangYingShuJu,nulllabel,nullvalue);
                                }
                            }
                        });

                    }
                }

            });
        }, /**
         * 构件select下拉菜单,通过业务字典传入的select对象和数据,构件下拉菜单
         * @param selectEle
         * @param dmbValue
         * @param data
         */
        buildDictSelectOption: function (selectEle, dmbValue, data,nulllabel,nullvalue) {
            var optionsHtml = "";
            if(nulllabel!=undefined && nulllabel!=""){
                if(nullvalue!=undefined){
                    optionsHtml += "<option value='"+nullvalue+"'>"+nulllabel+"</option>";
                }
            }

            if (dmbValue) {
                $.each(data, function (index, docEle) {
                    if (dmbValue == docEle.dmid) {
                        optionsHtml += "<option value='" + docEle.dmid + "' selected>" + docEle.dmname + "</option>";
                    } else {
                        optionsHtml += "<option value='" + docEle.dmid + "'>" + docEle.dmname + "</option>";
                    }

                });
            } else {
                $.each(data, function (index, docEle) {
                    optionsHtml += "<option value='" + docEle.dmid + "'>" + docEle.dmname + "</option>";
                });
            }

            $(selectEle).append(optionsHtml);
        }
    };
    module.exports = fn;
});