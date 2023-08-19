import { ProjectBody } from '../ProjectBody/ProjectBody';

import { TicketDetails } from '../TicketDetails/TicketDetails';
import './Body.css';

export const Body = () => {
    return <section className="body">
       
        <BodyDivider />
        <ProjectBody />
    </section>
}


const BodyDivider = () => <hr className='body__divider' />