import store from '@/store'
import { actions } from '@/store/constants'

import { helper } from '@/services/helper'


export const createTestExam = () => {

    if (helper.isProduction)
        return Promise.reject(new Error('can not generate test exam in production mode'))

    const exam = { title: 'Тестовый экзамен для проверки работоспособности системы' }

    return store.dispatch(actions.createExam, exam)
        .then(createTestQuestions)
        .catch(err => alert(err))

}

const createTestQuestions = exam => {

    const numberOfQuestions = 100
    const mapFunc = (el, i) => ({ exam: exam.id, text: `Вопрос ${ i + 1 }` })
    const questions = Array(numberOfQuestions).fill('').map(mapFunc)

    return store.dispatch(actions.createQuestion, questions)
        .then(createTestAnswers)

}

const createTestAnswers = questions => {

    const answers = questions.reduce((result, question) => {

        const numberOfAnswers = 3 + Math.floor(Math.random() * 4)
        const correctAnswerId = Math.floor(Math.random() * numberOfAnswers)

        const mapFunc = (el, i) => {

            return {
                question: question.id,
                text: `Ответ ${ i + 1 }`,
                isCorrect: i === correctAnswerId
            }

        }

        return result.concat(Array(numberOfAnswers).fill('').map(mapFunc))

    }, [])

    return store.dispatch(actions.createAnswer, answers)

}
