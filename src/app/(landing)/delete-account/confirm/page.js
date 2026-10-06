import { Suspense } from 'react'
import ConfirmDeleteAccountForm from './ConfirmForm'

export default function ConfirmDeleteAccountPage() {
    return (
        <Suspense fallback={null}>
            <ConfirmDeleteAccountForm />
        </Suspense>
    )
}
