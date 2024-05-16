import { SafeAreaView, ScrollView, View } from "react-native";
import Post from "../components/Post";
import { POSTS } from "../data/posts";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {POSTS.map((post, index) => (
          <View key={index}>
            <Post post={post} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
