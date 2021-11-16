import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.25,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '400',
    marginLeft: 10,
    flex: 1,
    flexShrink: 0.5,
    flexWrap: 'wrap',
  },
  itemSubTitle: {
    fontSize: 14,
    marginHorizontal: 10,
    marginTop: 0,
    flex: 1,
    flexWrap: 'wrap',
  },
  itemColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemColumnText: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    overflow: 'hidden',
    width: 50,
    height: 50,
    margin: 5,
  },
});
