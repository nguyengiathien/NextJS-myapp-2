'use server'

import { resolve } from "styled-jsx/css";

// message - data truyen tu cient
// return obj
export async function LogClientMessage(message) {
    console.log(`[Sever Action] Received message: ${message} at ${new Date().toISOString()}`);
    await new Promise(resolve=> setTimeout(resolve,1000));
    return {success: true, responseMessage: `[Sever Action] Received message: ${message}`};
}