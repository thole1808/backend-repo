"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const firebaseConfig_1 = __importDefault(require("../config/firebaseConfig"));
const usersCollection = firebaseConfig_1.default.collection('users');
const updateUser = (userId, newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield usersCollection.doc(userId).update(newData);
        return true;
    }
    catch (error) {
        console.error('Error updating user:', error);
        return false;
    }
});
exports.updateUser = updateUser;
const fetchUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snapshot = yield usersCollection.doc(userId).get();
        if (snapshot.exists) {
            return snapshot.data();
        }
        else {
            console.log('No such document!');
            return null;
        }
    }
    catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
});
exports.fetchUser = fetchUser;
