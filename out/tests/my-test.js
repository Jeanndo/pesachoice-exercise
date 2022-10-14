"use strict";
/* eslint-disable no-undef */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
fixture `Test structure 1`.page `http://localhost:3001/`;
test("first test in TC", (t) => __awaiter(void 0, void 0, void 0, function* () {
    //some code here
}));
fixture `Test structure 2`.page `http://localhost:3001/`;
test("seond  test in TC", (t) => __awaiter(void 0, void 0, void 0, function* () {
    //some code here
}));
