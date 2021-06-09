import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.pinimg.com/564x/42/2f/ea/422feae85a046fe7959de4f99d191bc7.jpg"/>
                <Dropdown pointing="top" text="Mustafa">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
