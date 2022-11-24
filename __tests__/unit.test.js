// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone numbers
test('phone number true', () => {
    expect(functions.isPhoneNumber("(408) 594-8527")).toBe(true);
});

test('phone number true 2', () => {
    expect(functions.isPhoneNumber("800-594-8527")).toBe(true);
});

test('phone number false', () => {
    expect(functions.isPhoneNumber("408-594-852")).toBe(false);
});

test('phone number false 2', () => {
    expect(functions.isPhoneNumber("(408)-594-852")).toBe(false);
});

test('email true', () => {
    expect(functions.isEmail("d1george@ucsd.edu")).toBe(true);
});

test('email true 2', () => {
    expect(functions.isEmail("d1george@gmail.com")).toBe(true);
});

test('email false', () => {
    expect(functions.isEmail("d1georgeucsd.edu")).toBe(false);
});

test('email false 2', () => {
    expect(functions.isEmail("d1george")).toBe(false);
});

test('password true', () => {
    expect(functions.isStrongPassword("DanPass314")).toBe(true);
});
test('password true 2', () => {
    expect(functions.isStrongPassword("DanPass")).toBe(true);
});

test('password false', () => {
    expect(functions.isStrongPassword("Da")).toBe(false);
});
test('password false 2', () => {
    expect(functions.isStrongPassword("Daas;dlkjlaksjdlgkjasdlkgj")).toBe(false);
});

test('date true', () => {
    expect(functions.isDate("10/10/2020")).toBe(true);
});

test('date true 2', () => {
    expect(functions.isDate("10/1/2020")).toBe(true);
});

test('date false', () => {
    expect(functions.isDate("10//2020")).toBe(false);
});

test('date false 2', () => {
    expect(functions.isDate("10/11/202")).toBe(false);
});

test('hex color true', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('hex color true 2', () => {
    expect(functions.isHexColor("F00FFF")).toBe(true);
});

test('hex color false', () => {
    expect(functions.isHexColor("F00FF")).toBe(false);
});

test('hex color false 2', () => {
    expect(functions.isHexColor("#F00FF")).toBe(false);
});
