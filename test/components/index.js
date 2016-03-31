import AppSpec from './App_spec';
import AppBarSpec from './AppBar_spec';
import CollectionSpec from './Collection_spec';
import CollectionHeaderSpec from './CollectionHeader_spec';
import ErrorDialogSpec from './ErrorDialog_spec';
import LeftNavSpec from './LeftNav_spec';
import LoaderSpec from './Loader_spec';
import MenuItemSpec from './MenuItem_spec';
import ReleaseTracklistItemSpec from './ReleaseTracklistItem_spec';

describe('components', () => {
    describe('App', AppSpec);
    describe('AppBar', AppBarSpec);
    describe('Collection', CollectionSpec);
    describe('CollectionHeader', CollectionHeaderSpec);
    describe('ErrorDialog', ErrorDialogSpec);
    describe('LeftNav', LeftNavSpec);
    describe('Loader', LoaderSpec);
    describe('MenuItem', MenuItemSpec);
    describe('ReleaseTracklistItem', ReleaseTracklistItemSpec);
});
