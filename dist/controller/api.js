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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId; // Anda bisa mengambil userId dari params atau body request
    const newData = req.body; // Data baru untuk update
    const result = yield (0, userCollection_1.updateUser)(userId, newData);
    if (result) {
        res.status(200).json({ message: 'User data updated successfully' });
    }
    else {
        res.status(500).json({ message: 'Failed to update user data' });
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId; // Anda bisa mengambil userId dari params atau query
    const userData = yield (0, userCollection_1.fetchUser)(userId);
    if (userData) {
        res.status(200).json(userData);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
exports.fetchUserData = fetchUserData;
