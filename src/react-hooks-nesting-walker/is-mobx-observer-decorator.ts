import {
    isPropertyAccessExpression,
    isIdentifier,
    Expression,
} from 'typescript';



export const isMobxObserverDecorator = (expression: Expression) => {
    if (isIdentifier(expression)) {
        return expression.text === 'observer';
    } else if (isPropertyAccessExpression(expression)) {
        return (
            isIdentifier(expression.expression) &&
            expression.expression.text === 'mobx' &&
            isIdentifier(expression.name) &&
            expression.name.text === 'observer'
        );
    }

    return false;
}