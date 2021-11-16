import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#2E3440',
  },
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
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
  },
  cinemaName: {
    fontSize: 18,
    fontWeight: '300',
  },
  description: {
    fontSize: 16,
  },
  hyperlink: {
    fontSize: 16,
    color: 'blue',
  },
  infoBox: {
    // flexShrink: 0,
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontSize: 16,
    color: 'blue',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    maxHeight: '40%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  poster: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    width: 200,
    height: 200,
    marginRight: 20,
  },
  descriptionRight: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
