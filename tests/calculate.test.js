const calculate = require('../app');

/**
 * @description Global describe for calculation testcases
 */
describe('Calculate', () => {
    /**
     * @description Sum calculation
     */
    describe('Sum', () => {
        test('should calculate the sum of values', () => {
            expect(calculate(20,40,'+')).toBe(60)
        })
    })

    /**
     * @description Subtract calculation
     */
    describe('Sub', () => {
        test('should calculate the sub of values', () => {
            expect(calculate(20,40,'-')).toBe(-20)
        })
    })

    /**
     * @description Multiply calculation
     */
    describe('Multiply', () => {
        test('should calculate the multiply of values', () => {
            expect(calculate(20,40,'*')).toBe(800)
        })
    })

    /**
     * @description Division calculation
     */
    describe('Division', () => {
        test('should calculate the division of values', () => {
            expect(calculate(90, 30,'/')).toBe("3.00");
        })
    })

    /**
     * @description Handle Error cases
     */
    describe('Error', () => {
        test('should throw error when given 0 in division operation', () => {
            expect(calculate(6, 0, '/')).toBe('Operation Can not be performed due to division by zero. Please try again.');
        })

        test('should throw error when operator is not provider properly', () => {
           console.log(expect(calculate(7, 8, '&&&&&&')).toBe('Operators must be +, -, * or / only. Please try again'));
        })
    })
})