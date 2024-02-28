export const splitAlgo = function(positions) {
    return calculateFinalDebts(calculateSumDebts(calculateAllDebts(positions)));
}


/**
 * Функция по массиву позиций создает массив долгов для каждой позиции<br>
 * Пример массива:
 * <ul>
 *  <li>Маша -> Дима 80 (1 позиция)</li>
 *  <li>Саша -> Дима 80 (1 позиция)</li>
 *  <li>Саша -> Маша 50 (2 позиция)</li>
 *  <li>Дима -> Маша 50 (2 позиция)</li>
 *  <li>Маша -> Дима 30 (3 позиция)</li>
 *  <li>Саша -> Дима 30 (3 позиция)</li>
 *  <li>Маша -> Саша 40 (4 позиция)</li>
 *  <li>Дима -> Саша 40 (4 позиция)</li>
 *  <li>Маша -> Саша 100 (5 позиция)</li>
 *  <li>Дима -> Саша 100 (5 позиция)</li>
 * </ul>
 * @param {Array} positions - массив позиций меню
 * @returns {Array} массив долгов для каждой позиции
 */
function calculateAllDebts(positions) {

    const allDebts = [];

    for (const position of positions) {
        const splitPrice = position.price / position.persons.length;
        const payer = position.payer;

        for (const person of position.persons) {

            if (person.id !== payer.id) {
                allDebts.push({
                    from: person,
                    to: payer,
                    sum: splitPrice
                });
            }
        }
    }

    return allDebts;
}

/**
 * Функция по массиву долгов для каждой позиции создает массив сумм долгов<br>
 * Пример массива (на основе примера из {@link calculateAllDebts}):
 * <ul>
 *  <li>Маша -> Дима 80+30=110</li>
 *  <li>Маша -> Саша 40+100=140</li>
 *  <li>Саша -> Дима 80+30=110</li>
 *  <li>Саша -> Маша 50</li>
 *  <li>Дима -> Саша 40+100=140</li>
 *  <li>Дима -> Маша 50</li>
 * </ul>
 * @param {Array} allDebts - массив долгов для каждой позиции, полученный из {@link calculateAllDebts}
 * @returns {Array} массив сумм долгов
 */
function calculateSumDebts(allDebts) {

    const sumDebts = [];

    for (const debt of allDebts) {
        const currentDebt = sumDebts.find(
            (d) => d.from.id === debt.from.id && d.to.id === debt.to.id,
        );

        if (!currentDebt) {
            sumDebts.push({
                from: debt.from,
                to: debt.to,
                sum: debt.sum
            });
        } else {
            currentDebt.sum = currentDebt.sum + debt.sum;
        }
    }

    return sumDebts;
}

/**
 * Функция по массиву сумм долгов создает массив итоговых долгов<br>
 * Пример массива (на основе примера из {@link calculateSumDebts}):
 * <ul>
 *  <li>Маша -> Дима 60</li>
 *  <li>Маша -> Саша 90</li>
 *  <li>Дима -> Саша 30</li>
 * </ul>
 * @param {Array} sumDebts - массив сумм долгов, полученный из {@link calculateSumDebts}
 * @returns {Array} массив итоговых долгов
 */
function calculateFinalDebts(sumDebts) {

    const calculateDebts = [];

    for (const debt of sumDebts) {
        if (
            calculateDebts.find(
                (d) =>
                (d.from.id === debt.from.id && d.to.id === debt.to.id) ||
                (d.from.id === debt.to.id && d.to.id === debt.from.id),
            )
        ) {
            continue;
        }

        const fromTo = debt;
        let toFrom = sumDebts.find(
            (d) => d.from.id === debt.to.id && d.to.id === debt.from.id,
        );

        if (!toFrom) {
            toFrom = {
                from: debt.to,
                to: debt.from,
                sum: 0
            };
        }

        if (fromTo.sum > toFrom.sum) {
            calculateDebts.push({
                from: fromTo.from,
                to: toFrom.from,
                sum: Math.round(fromTo.sum - toFrom.sum),
            });
        } else {
            calculateDebts.push({
                from: toFrom.from,
                to: fromTo.from,
                sum: Math.round(toFrom.sum - fromTo.sum),
            });
        }
    }

    return calculateDebts;
}