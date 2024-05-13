import { SafeAreaView, ScrollView } from "react-native";
import Post from "../components/Post";
import { POSTS } from "../data/posts";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
