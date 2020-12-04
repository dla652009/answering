import store from "./index";

const getters = {
    stuInfo: state => state.system.stuInfo,
    questionBank: state => state.questions.questionBank,
}
export default getters
