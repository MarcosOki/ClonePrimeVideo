import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import amazon_logo from "../../assets/amazon_logo.png";
import filme from "../../assets/movies/the_wheel_of_time.png";
import { CardMovie } from "../../components/CardMovie";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />
          <Image source={amazon_logo} style={styles.amazonLogoImg} />
        </View>
        <View style={styles.category}>
          <TouchableOpacity styles={styles.btn}>
            <Text style={styles.btnText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.btn}>
            <Text style={styles.btnText}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.btn}>
            <Text style={styles.btnText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.btn}>
            <Text style={styles.btnText}>Kids</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.movieApresentation}>
          <Image source={filme} style={{ width: "95%" }} />
        </View>
        <View style={styles.continueWatching}>
          <View style={styles.boxTextMovies}>
            <Text style={styles.btnText}>Continue Assistindo</Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.list}
            contentContainerStyle={{ gap: 15 }}
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardMovie url={item.moviesURL} />}
          />
        </View>
        <View style={styles.continueWatching}>
          <View style={styles.boxTextMovies}>
            <Text style={styles.btnText}>Crimes Movies</Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.list}
            contentContainerStyle={{ gap: 15 }}
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardMovie url={item.moviesURL} />}
          />
        </View>
        <View style={styles.continueWatching}>
          <View style={styles.boxTextMovies}>
            <Text style={styles.btnText}>Assista em seu idioma</Text>
          </View>
          <FlatList
            horizontal={true}
            style={styles.list}
            contentContainerStyle={{ gap: 15 }}
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardMovie url={item.moviesURL} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },
  category: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
  },
  movieApresentation: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  continueWatching: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  boxTextMovies: {
    width: "100%",
  },
});
