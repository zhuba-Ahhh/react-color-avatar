import { version } from '../../../package.json';
import './style.less'

export default function Footer() {
    return (
        <footer className='footer'>
            <div
                data-message='If you are deploying to your own public website, please do not modify it unless you have permission from the original author.'
            >
                Made by
                <a
                    className='link'
                    href='https://notion.zhuba.xyz'
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    &nbsp;ZhuBa-Ahhh
                </a>
            </div>

            <div className='divider'>|</div>

            <div className='locale' >简体中文</div>

            <div className='divider'>|</div>

            <div className='version' >{ version }</div>
        </footer>
    )
}
