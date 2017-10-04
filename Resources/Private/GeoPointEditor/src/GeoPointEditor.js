import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Button, Icon, Label} from '@neos-project/react-ui-components';
import I18n from '@neos-project/neos-ui-i18n';
import {neos} from '@neos-project/neos-ui-decorators';

const SecondaryEditor = 'Ttree.GeoPointEditor/Inspector/Secondary/Editors/GeoPointEditorWrapper';

@neos(globalRegistry => ({
    secondaryEditorsRegistry: globalRegistry.get('inspector').get('secondaryEditors')
}))
export default class GeoPointEditor extends PureComponent {

    static propTypes = {
        identifier: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        renderSecondaryInspector: PropTypes.func.isRequired,
        secondaryEditorsRegistry: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleOpenMap = this.handleOpenMap.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const {label, value, identifier} = this.props;

        const {lat = null, lon = null} = value;

        const currentPosition = lat !== null && lon !== null ? (<div>Current value: {parseFloat(lat).toFixed(2)} / {parseFloat(lon).toFixed(2)}</div>) : null;

        return (
            <div>
                <Label htmlFor={identifier}>
                    <Button onClick={this.handleOpenMap} style="brand">
                        <Icon icon="map" padded="right" style="lighter" title="Edit"/>
                        <I18n id={label}/>
                    </Button>
                </Label>
                {currentPosition}
            </div>
        );
    }

    handleChange(newValue) {
        const {commit} = this.props;
        commit(JSON.stringify(newValue));
    }

    handleOpenMap() {
        const {renderSecondaryInspector, secondaryEditorsRegistry, value} = this.props;
        const {component: GeoPointEditorWrapper} = secondaryEditorsRegistry.get(SecondaryEditor);
        renderSecondaryInspector('TTREEGEOPOINT_GEOPOINTEDITOR_EDIT', () =>
            <GeoPointEditorWrapper onChange={this.handleChange} point={value ? JSON.parse(value) : undefined}/>
        );
    }
}
