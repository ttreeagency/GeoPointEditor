import manifest from '@neos-project/neos-ui-extensibility';

import GeoPointEditor from './GeoPointEditor';
import GeoPointEditorWrapper from './GeoPointEditorWrapper';

manifest('Ttree.GeoPointEditor:GeoPointEditor', {}, globalRegistry => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');
	const secondaryEditorRegistry = globalRegistry.get('inspector').get('secondaryEditors');

	editorsRegistry.add('Ttree.GeoPointEditor/Inspector/Editors/GeoPointEditor', {
		component: GeoPointEditor
	});
	secondaryEditorRegistry.add('Ttree.GeoPointEditor/Inspector/Secondary/Editors/GeoPointEditorWrapper', {
		component: GeoPointEditorWrapper
	});
});
