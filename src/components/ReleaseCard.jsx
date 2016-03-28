import React from 'react';

import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

export default class CardExampleWithAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <Card style={{
                width: 600
            }}>
                <CardMedia
                    overlay={
                        <CardTitle
                            title="Overlay title"
                            subtitle="Overlay subtitle"
                        />
                    }>
                    <img src="http://lorempixel.com/600/337/nature/"/>
                </CardMedia>
                <CardTitle title="Tracklist" subtitle="Card subtitle"/>
                <CardText>
                    {'Donec mattis pretium massa. Aliquam erat volutpat. '}
                    {'mattis quis lacus id, pellentesque lobortis odio.'}
                </CardText>
            </Card>
        );
    }
}

export default CardExampleWithAvatar;
