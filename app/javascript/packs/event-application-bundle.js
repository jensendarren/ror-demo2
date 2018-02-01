import ReactOnRails from 'react-on-rails';
import "../../assets/stylesheets/event-application.scss"
// https://stackoverflow.com/questions/43824626/rails-5-1-webpack-images-in-css

import EventApplication from '../bundles/EventApplication/components/EventApplication';
import EventTable from '../bundles/EventApplication/components/EventTable';

ReactOnRails.register({
    EventApplication,
    EventTable
});
