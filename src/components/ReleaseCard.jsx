import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';

import ReleaseTracklist from '../containers/ReleaseTracklist';

import { DEFAULT_THUMB } from '../constants/constants';

export default class ReleaseCard extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    static propTypes = {
        artist: React.PropTypes.string,
        title: React.PropTypes.string,
        year: React.PropTypes.number,
        tracklist: React.PropTypes.arrayOf(React.PropTypes.shape({
            position: React.PropTypes.string,
            duration: React.PropTypes.string,
            title: React.PropTypes.string
        }))
    }

    static defaultProps = {
        tracklist: []
    }

    render() {
        const tracklist = this.props.tracklist.length
            ? <ReleaseTracklist tracklist={this.props.tracklist} />
            : null;

        return (
            <Card style={{
                width: 400
            }}>
                <CardMedia
                    overlay={
                        <CardTitle
                            title={`${this.props.title} - ${this.props.artist}`}
                            subtitle={this.props.year}
                        />
                    }>
                    <div style={{
                        height: 200,
                        backgroundImage: `url(${DEFAULT_THUMB})`,
                        backgroundPositionY: '50%',
                        backgroundSize: 'cover'
                    }} />
                </CardMedia>
                {tracklist}
            </Card>
        );
    }
}
