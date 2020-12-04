

const answerStuInfo = 'answer_stuInfo'
//学生信息
export function setStuInfo(stuInfo) {
    return localStorage.setItem(answerStuInfo, JSON.stringify(stuInfo))
}

export function getStuInfo() {
    return localStorage.getItem(answerStuInfo)
}
