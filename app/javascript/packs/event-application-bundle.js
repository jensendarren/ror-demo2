import ReactOnRails from 'react-on-rails';

import EventApplication from '../bundles/EventApplication/components/EventApplication';
import EventTable from '../bundles/EventApplication/components/EventTable';
import Event from '../bundles/EventApplication/components/Event';

ReactOnRails.register({
    EventApplication,
    EventTable,
    Event
});
