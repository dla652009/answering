//题库模块

const state = {

    questionBank: {
        progress: 1,//当前进度
        total: 20,//题库总数
        rightNumber: 0,//正确数量
        questionNumber: 5,//问题总数
        questions: [
            {
                subject: '当按键盘A时，使用onKeyDown事件打印event.keyCode的结果是',//题目1
                options: [//选项
                    {
                        answer: "65",
                        right: true    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "13",
                        right: false
                    }, {
                        answer: "97",
                        right: false
                    }, {
                        answer: "37",
                        right: false
                    }
                ]
            },
            {
                subject: '在javascript里，下列选项中不属于数组方法的是',//题目2
                options: [//选项
                    {
                        answer: "sort()",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "length()",
                        right: true
                    }, {
                        answer: "concat()",
                        right: false
                    }, {
                        answer: "reverse()",
                        right: false
                    }
                ]
            },
            {
                subject: '下列哪一个选项可以用来检索被选定的选项的索引号?',//题目3
                options: [//选项
                    {
                        answer: "disabled",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "selectedIndex",
                        right: true
                    }, {
                        answer: "option",
                        right: false
                    }, {
                        answer: "multiple",
                        right: false
                    }
                ]
            },
            {
                subject: '希望图片具有”提交”按钮同样的功能,该如何编写表单提交?',//题目4
                options: [//选项
                    {
                        answer: "在图片的onClick事件中手动提交",
                        right: true    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "在图片上添加onSubmit事件",
                        right: false
                    }, {
                        answer: "在图片的onSubmit事件中手动提交",
                        right: false
                    }, {
                        answer: "在表单中自动提交",
                        right: false
                    }
                ]
            },
            {
                subject: '下列属性哪一个能够实现层的隐藏?',//题目5
                options: [//选项
                    {
                        answer: "display:false",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "display:hidden",
                        right: false
                    }, {
                        answer: "display:none",
                        right: true
                    }, {
                        answer: "display:” ”",
                        right: false
                    }
                ]
            },
            {
                subject: '下列哪一个选项不属于document对象的方法?',//题目6
                options: [//选项
                    {
                        answer: "focus()",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "getElementById()",
                        right: false
                    }, {
                        answer: "getElementsByName()",
                        right: false
                    }, {
                        answer: "bgColor()",
                        right: true
                    }
                ]
            },
            {
                subject: 'javascript进行表单验证的目的是',//题目7
                options: [//选项
                    {
                        answer: "把用户的正确信息提交给服务器",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "检查提交的数据必须符合实际",
                        right: true
                    }, {
                        answer: "使得页面变得美观、大方",
                        right: false
                    }, {
                        answer: "减轻服务器端的压力",
                        right: false
                    }
                ]
            },
            {
                subject: 'display属性值的常用取值不包括',//题目8
                options: [//选项
                    {
                        answer: "inline",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "block",
                        right: false
                    }, {
                        answer: "hidden",
                        right: true
                    }, {
                        answer: "none",
                        right: false
                    }
                ]
            },
            {
                subject: '在jquery中，想要给第一个指定的元素添加样式,下面哪一个是正确的?',//题目9
                options: [//选项
                    {
                        answer: "css(name,value)",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "css(name)",
                        right: true
                    }, {
                        answer: "first",
                        right: false
                    }, {
                        answer: "eq(1)",
                        right: false
                    }
                ]
            },
            {
                subject: '那种标签适合定义文章?',//题目10
                options: [//选项
                    {
                        answer: "div",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "aside",
                        right: false
                    }, {
                        answer: "artcle",
                        right: true
                    }, {
                        answer: "section",
                        right: false
                    }
                ]
            },
            {
                subject: '哪个标签适合定义导航?',//题目11
                options: [//选项
                    {
                        answer: "nav",
                        right: true    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "progress",
                        right: false
                    }, {
                        answer: "article",
                        right: false
                    }, {
                        answer: "aside",
                        right: false
                    }
                ]
            },
            {
                subject: '哪个单位是相对根元素html来计算的?',//题目12
                options: [//选项
                    {
                        answer: "em",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "pt",
                        right: false
                    }, {
                        answer: "rem",
                        right: true
                    }, {
                        answer: "px",
                        right: false
                    }
                ]
            },
            {
                subject: '在鼠标事件中,获取鼠标相对于当前窗口可视区域的纵坐标,正确的是?',//题目13
                options: [//选项
                    {
                        answer: "event.offset().top",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "event.clientY",
                        right: true
                    }, {
                        answer: "event.offsetTop",
                        right: false
                    }, {
                        answer: "event.pageY",
                        right: false
                    }
                ]
            },
            {
                subject: 'readyState为3表示什么?',//题目14
                options: [//选项
                    {
                        answer: "请求处理前",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "请求处理后",
                        right: false
                    }, {
                        answer: "请求完成",
                        right: false
                    }, {
                        answer: "请求处理中",
                        right: true
                    }
                ]
            },
            {
                subject: 'document.styleSheets[0].cssRule[0],IE中这个属性用什么?',//题目15
                options: [//选项
                    {
                        answer: "以上都不对",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "deleteRule",
                        right: false
                    }, {
                        answer: "rules",
                        right: true
                    }, {
                        answer: "insertRule",
                        right: false
                    }
                ]
            },
            {
                subject: '计算样式的时候,如果元素不是绝对定位,查询top值时,返回什么?',//题目16
                options: [//选项
                    {
                        answer: "auto",
                        right: true    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "null",
                        right: false
                    }, {
                        answer: "数值",
                        right: false
                    }, {
                        answer: "undefined",
                        right: false
                    }
                ]
            },
            {
                subject: 'JavaScript中用来获取滚动条在垂直方向上的距离的是什么?',//题目17
                options: [//选项
                    {
                        answer: "offserTop",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "scrollTop",
                        right: true
                    }, {
                        answer: "offserLeft",
                        right: false
                    }, {
                        answer: "scrollLeft",
                        right: false
                    }
                ]
            },
            {
                subject: '当元素有class样式时取消,没有时添加class样式可以通过什么方法实现?',//题目18
                options: [//选项
                    {
                        answer: "removeClass()",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "addClass()",
                        right: false
                    }, {
                        answer: "triggerClass()",
                        right: false
                    }, {
                        answer: "toggleClass()",
                        right: true
                    }
                ]
            },
            {
                subject: '将a标签用div标签包裹起来的方法是什么?',//题目19
                options: [//选项
                    {
                        answer: "$('a').wrap('<div></div>')",
                        right: true    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "$('a').wrap('div')",
                        right: false
                    }, {
                        answer: "$('div').wrap('a')",
                        right: false
                    }, {
                        answer: "$('a').wrap('<div>')",
                        right: false
                    }
                ]
            },
            {
                subject: '在父元素末端添加一个子元素用什么方法?',//题目20
                options: [//选项
                    {
                        answer: "html()",
                        right: false    //是否为正确答案 true正确,false错误
                    }, {
                        answer: "after()",
                        right: false
                    }, {
                        answer: "append()",
                        right: true
                    }, {
                        answer: "insertBefore()",
                        right: false
                    }
                ]
            }
        ]
    }
}




const mutations = {
    updateRightNumber(state, value) {
        //修改正确数量
        state.questionBank.rightNumber = value
    },
    increaseRightNumber(state, increase) {
        //加分
        //increase每次增加数
        state.questionBank.rightNumber += increase

    }

}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
