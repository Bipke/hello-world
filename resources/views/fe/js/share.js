/* Share */
(function(t, e) {
    "use strict";
    var a = function(t) {
        this.elem = t
    };
    a.init = function() {
        var t = e.querySelectorAll(".sharer"), r, i = t.length;
        for (r = 0; r < i; r++) {
            t[r].addEventListener("click", a.add)
        }
    }
    ;
    a.add = function(t) {
        var e = t.currentTarget || t.srcElement;
        var r = new a(e);
        r.share()
    }
    ;
    a.prototype = {
        constructor: a,
        getValue: function(t) {
            var e = this.elem.getAttribute("data-" + t);
            return e === undefined || e === null ? false : e
        },
        share: function() {
            var t = this.getValue("sharer").toLowerCase()
              , e = {
                facebook: {
                    shareUrl: "https://www.facebook.com/sharer/sharer.php",
                    params: {
                        u: this.getValue("url")
                    }
                },
                googleplus: {
                    shareUrl: "https://plus.google.com/share",
                    params: {
                        url: this.getValue("url")
                    }
                },
                linkedin: {
                    shareUrl: "https://www.linkedin.com/shareArticle",
                    params: {
                        url: this.getValue("url"),
                        mini: true
                    }
                },
                twitter: {
                    shareUrl: "https://twitter.com/intent/tweet/",
                    params: {
                        text: this.getValue("title"),
                        url: this.getValue("url"),
                        hashtags: this.getValue("hashtags"),
                        via: this.getValue("via")
                    }
                },
                email: {
                    shareUrl: "mailto:" + this.getValue("to"),
                    params: {
                        subject: this.getValue("subject"),
                        body: this.getValue("title") + "\n" + this.getValue("url")
                    },
                    isLink: true
                },
                whatsapp: {
                    shareUrl: "whatsapp://send",
                    params: {
                        text: this.getValue("title") + " " + this.getValue("url")
                    },
                    isLink: true
                },
                telegram: {
                    shareUrl: "tg://msg_url",
                    params: {
                        text: this.getValue("title") + " " + this.getValue("url")
                    },
                    isLink: true
                },
                viber: {
                    shareUrl: "viber://forward",
                    params: {
                        text: this.getValue("title") + " " + this.getValue("url")
                    },
                    isLink: true
                },
                line: {
                    shareUrl: "http://line.me/R/msg/text/?" + encodeURIComponent(this.getValue("title") + " " + this.getValue("url")),
                    isLink: true
                },
                pinterest: {
                    shareUrl: "https://www.pinterest.com/pin/create/button/",
                    params: {
                        url: this.getValue("url"),
                        media: this.getValue("image"),
                        description: this.getValue("description")
                    }
                },
                tumblr: {
                    shareUrl: "http://tumblr.com/widgets/share/tool",
                    params: {
                        canonicalUrl: this.getValue("url"),
                        content: this.getValue("url"),
                        posttype: "link",
                        title: this.getValue("title"),
                        caption: this.getValue("caption"),
                        tags: this.getValue("tags")
                    }
                },
                hackernews: {
                    shareUrl: "https://news.ycombinator.com/submitlink",
                    params: {
                        u: this.getValue("url"),
                        t: this.getValue("title")
                    }
                },
                reddit: {
                    shareUrl: "https://www.reddit.com/submit",
                    params: {
                        url: this.getValue("url")
                    }
                },
                vk: {
                    shareUrl: "http://vk.com/share.php",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        description: this.getValue("caption"),
                        image: this.getValue("image")
                    }
                },
                xing: {
                    shareUrl: "https://www.xing.com/app/user",
                    params: {
                        op: "share",
                        url: this.getValue("url"),
                        title: this.getValue("title")
                    }
                },
                buffer: {
                    shareUrl: "https://buffer.com/add",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        via: this.getValue("via"),
                        picture: this.getValue("picture")
                    }
                },
                instapaper: {
                    shareUrl: "http://www.instapaper.com/edit",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        description: this.getValue("description")
                    }
                },
                pocket: {
                    shareUrl: "https://getpocket.com/save",
                    params: {
                        url: this.getValue("url")
                    }
                },
                digg: {
                    shareUrl: "http://www.digg.com/submit",
                    params: {
                        url: this.getValue("url")
                    }
                },
                stumbleupon: {
                    shareUrl: "http://www.stumbleupon.com/submit",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title")
                    }
                },
                flipboard: {
                    shareUrl: "https://share.flipboard.com/bookmarklet/popout",
                    params: {
                        v: 2,
                        title: this.getValue("title"),
                        url: this.getValue("url"),
                        t: Date.now()
                    }
                },
                weibo: {
                    shareUrl: "http://service.weibo.com/share/share.php",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        pic: this.getValue("image"),
                        appkey: this.getValue("appkey"),
                        ralateUid: this.getValue("ralateuid"),
                        language: "zh_cn"
                    }
                },
                renren: {
                    shareUrl: "http://share.renren.com/share/buttonshare",
                    params: {
                        link: this.getValue("url")
                    }
                },
                myspace: {
                    shareUrl: "https://myspace.com/post",
                    params: {
                        u: this.getValue("url"),
                        t: this.getValue("title"),
                        c: this.getValue("description")
                    }
                },
                blogger: {
                    shareUrl: "https://www.blogger.com/blog-this.g",
                    params: {
                        u: this.getValue("url"),
                        n: this.getValue("title"),
                        t: this.getValue("description")
                    }
                },
                baidu: {
                    shareUrl: "http://cang.baidu.com/do/add",
                    params: {
                        it: this.getValue("title"),
                        iu: this.getValue("url")
                    }
                },
                douban: {
                    shareUrl: "https://www.douban.com/share/service",
                    params: {
                        name: this.getValue("title"),
                        href: this.getValue("url"),
                        image: this.getValue("image")
                    }
                },
                okru: {
                    shareUrl: "https://connect.ok.ru/dk",
                    params: {
                        "st.cmd": "WidgetSharePreview",
                        "st.shareUrl": this.getValue("url"),
                        title: this.getValue("title")
                    }
                },
                mailru: {
                    shareUrl: "http://connect.mail.ru/share",
                    params: {
                        share_url: this.getValue("url"),
                        linkname: this.getValue("title"),
                        linknote: this.getValue("description"),
                        type: "page"
                    }
                }
            }
              , a = e[t];
            if (a) {
                a.width = this.getValue("width");
                a.height = this.getValue("height")
            }
            return a !== undefined ? this.urlSharer(a) : false
        },
        urlSharer: function(e) {
            var a = e.params || {}, r = Object.keys(a), i, s = r.length > 0 ? "?" : "";
            for (i = 0; i < r.length; i++) {
                if (s !== "?") {
                    s += "&"
                }
                if (a[r[i]]) {
                    s += r[i] + "=" + encodeURIComponent(a[r[i]])
                }
            }
            e.shareUrl += s;
            if (!e.isLink) {
                var l = e.width || 600
                  , h = e.height || 480
                  , u = t.innerWidth / 2 - l / 2 + t.screenX
                  , n = t.innerHeight / 2 - h / 2 + t.screenY
                  , g = "scrollbars=no, width=" + l + ", height=" + h + ", top=" + n + ", left=" + u
                  , o = t.open(e.shareUrl, "", g);
                if (t.focus) {
                    o.focus()
                }
            } else {
                t.location.href = e.shareUrl
            }
        }
    };
    if (e.readyState === "complete" || e.readyState !== "loading") {
        a.init()
    } else {
        e.addEventListener("DOMContentLoaded", a.init)
    }
    t.addEventListener("page:load", a.init);
    t.Sharer = a
}
)(window, document);