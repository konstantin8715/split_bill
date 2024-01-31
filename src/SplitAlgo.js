export const splitAlgo = function(positions) {
    const allDebts = [];
    const sumDebts = [];
    const calculateDebts = [];

    for (const position of positions) {
        const splitPrice = position.price / position.persons.length;
        const payer = position.payer;

        for (const person of position.persons) {
            if (person != payer) {
                allDebts.push({
                    from: person,
                    to: payer,
                    sum: splitPrice
                });
            }
        }
    }

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
                sum: fromTo.sum - toFrom.sum,
            });
        } else {
            calculateDebts.push({
                from: toFrom.from,
                to: fromTo.from,
                sum: toFrom.sum - fromTo.sum,
            });
        }
    }

    return calculateDebts;
}