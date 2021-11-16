import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  videoContainer: {
    width: 'auto', // Reset width
    height: 'auto', // Reset height
    flex: 0,
    backgroundColor: "black"
  },
  video: {
    paddingTop: '56.25%', // Percentage ratio for 16:9
    position: 'relative', // Set to relative
    height: 'auto',
    flex: 0,
    // webkitPlaysinline: true,
  },
  container: {
    width: '100%', // Reset width
    height: '100%', // Reset height
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignContent: "center",
    justifyContent: "center"
  },
});
