import React from 'react'
import { Button, ButtonContent } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Button primary>Giriş Yap</Button>
            <Button primary style={{marginleft:"0.5em"}}>Kayıt Ol</Button>
        </div>
    )
}
