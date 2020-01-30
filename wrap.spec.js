const chai = require('chai');
const expect = chai.expect;
const wrap = require('./wrap')

describe ("Wrap function", () => {
    it('will return a string', () => {
        expect(wrap()).to.be.a('string');
    })

    it('will put in \n on word boundaries', () => {
        expect(wrap('hi there', 5)).to.include('hi \nthere');
        expect(wrap('hithere', 5)).to.equal('hithere');
    })
    it('will wrap based on columns', () => {
        expect(wrap('hi', 0)).to.equal('hi');
        expect(wrap('hi, Jason', 9)).to.equal('hi, Jason');
        expect(wrap('hi, Jason', 4)).to.equal('hi \nJason');
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
            .to.equal('Lorem ipsum dolor \nsit eu amet, elit na \nmagna sem amet nulla \nvel purus ac ligula.');
    })
})