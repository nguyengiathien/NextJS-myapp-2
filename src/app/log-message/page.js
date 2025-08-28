'use client'
import { useState } from 'react'
import styles from './log-message.module.css'
import { LogClientMessage } from './action'
export default function LogMessagePage() {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const handleSendMessage = async (messageContent) => {
        setIsLoading(true);
        setResponse(null);
        try {
            const result = await LogClientMessage(messageContent);
            console.log(result);
            if (result.success) {
                setResponse({ type: 'success', message: result.responseMessage });
            } else {
                setResponse({ type: 'error', message: `Loi: ${result.responseMessage}` });
            }
        } catch (err) {
            setResponse({ type: 'error', message: `Loi xay ra khi goi server: ${err.message}` });
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div>
            <h1>Call Server Action when onClick</h1>
            <button onClick={() => handleSendMessage('Tin nhan tu nut 1')} disabled={isLoading} >
                {isLoading ? 'Dang gui' : "Tin nhan 1"}
            </button>
            <button onClick={() => handleSendMessage('Tin nhan tu nut 2')} disabled={isLoading} >
                {isLoading ? 'Dang gui' : "Tin nhan 2"}
            </button>
            <div>
                {response &&
                    <div>
                        <strong>{response.message}</strong>
                    </div>
                }
            </div>
        </div>
    )
}