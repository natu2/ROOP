//source: https://javascript.plainenglish.io/how-to-build-a-photo-share-app-with-react-native-instagram-clone-8cc81c5612af

import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Post = ({ post }) => {
  <View>
    <PostHeader post={post} />
    <View>
      <PostImage post={post} />
      <PostCaption post={post} />
      <PostCommentSection post={post} />
      <PostComments post={post} />
    </View>
  </View>;
};

const PostHeader = ({ post }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{ uri: post.pic }} style={styles.story} />
      <Text style={styles.userName}>{post.username}</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const PostCaption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      {" "}
      style= {{ fontWeight: 600 }}
      {post.username}
    </Text>
    <Text> {post.caption} </Text>
  </View>
);

//will create comment section IF there are more than 0 comments for this post
// if there are more than 1 comments then: View all [# of comments] comments
// otherwise: View comment

const PostCommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text>
        View{post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

//when using map, every element created is required to have a unique key element
const PostComments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ fontWeight: 600 }}>{comment.user}</Text>{" "}
        {comment.comment}
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  story: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: "#ff8501",
  },
  userName: {
    fontWeight: 700,
    color: "white",
    marginLeft: 5,
  },
});
