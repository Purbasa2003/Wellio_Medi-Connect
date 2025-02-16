import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';                                                                                                                                                              

// Dummy data for demonstration
const users = [
  { id: '1', name: 'Priya', avatar: require('../assets/avatar1.png') },
  { id: '2', name: 'Anjali', avatar: require('../assets/avatar2.png') },
  { id: '3', name: 'Sneha', avatar: require('../assets/avatar3.png') },
];

const categories = [
  { id: '0', title: 'All', icon: 'view-list' },
  { id: '1', title: 'Health & Wellness', icon: 'favorite' },
  { id: '2', title: 'Fitness & Exercise', icon: 'fitness-center' },
  { id: '3', title: 'Mental Health', icon: 'psychology' },
  { id: '4', title: 'Nutrition', icon: 'restaurant' },
  { id: '5', title: 'Pregnancy & Parenting', icon: 'child-care' },
];

const posts = [
  {
    id: '1',
    user: users[0],
    category: categories[1],
    content: 'What are some good yoga poses for stress relief?',
    likes: 12,
    comments: 5,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: users[1],
    category: categories[2],
    content: 'Can anyone recommend a good workout routine for beginners?',
    likes: 8,
    comments: 3,
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    user: users[2],
    category: categories[3],
    content: 'How do you manage work-life balance?',
    likes: 15,
    comments: 7,
    timestamp: '1 day ago',
  },
];

const CommunityConnectScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to "All"
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false); // State for category selection modal
  const [showPostModal, setShowPostModal] = useState(false); // State for post input modal
  const [postContent, setPostContent] = useState(''); // State for post content
  const [selectedPostCategory, setSelectedPostCategory] = useState(null); // State for selected category for post
  const [allPosts, setAllPosts] = useState(posts); // State to manage all posts

  // Filter posts based on selected category
  const filteredPosts = selectedCategory.id === '0'
    ? allPosts // Show all posts if "All" is selected
    : allPosts.filter((post) => post.category.id === selectedCategory.id);

  // Handle creating a new post
  const handleCreatePost = () => {
    if (!postContent.trim()) {
      Alert.alert('Error', 'Please write something before posting.');
      return;
    }

    const newPost = {
      id: Math.random().toString(),
      user: users[0], // Replace with the current logged-in user
      category: selectedPostCategory,
      content: postContent,
      likes: 0,
      comments: 0,
      timestamp: 'Just now',
    };

    setAllPosts([newPost, ...allPosts]); // Add the new post to the top of the list
    setPostContent(''); // Clear the input
    setShowPostModal(false); // Close the modal
    setSelectedPostCategory(null); // Reset selected category
  };

  // Handle category selection for post
  const handleCategorySelect = (category) => {
    setSelectedPostCategory(category);
    setShowCategoryModal(false); // Close the category modal
    setShowPostModal(true); // Open the post input modal
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory?.id === item.id && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Icon name={item.icon} size={24} color={selectedCategory?.id === item.id ? "#fff" : "#6a5acd"} />
      <Text style={[
      styles.categoryText,
      selectedCategory?.id === item.id && styles.selectedCategoryText,
    ]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderPostItem = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={item.user.avatar} style={styles.avatar} />
        <View style={styles.postUserInfo}>
          <Text style={styles.postUserName}>{item.user.name}</Text>
          <Text style={styles.postCategory}>{item.category.title}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.postAction}>
          <Icon name="favorite-border" size={20} color="#6a5acd" />
          <Text style={styles.postActionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postAction}>
          <Icon name="comment" size={20} color="#6a5acd" />
          <Text style={styles.postActionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postAction}>
          <Icon name="share" size={20} color="#6a5acd" />
          <Text style={styles.postActionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Connect</Text>
       </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for topics or users..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories */}
      <View style={styles.topContent}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
      </View>

      {/* Posts */}
      <View style={styles.discussionContainer}>
      <Text style={styles.sectionTitle}>Recent Discussions</Text>
      <FlatList
        data={filteredPosts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      </View>

      {/* Create Post Button */}
      <TouchableOpacity
        style={styles.createPostButton}
        onPress={() => setShowCategoryModal(true)}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Category Selection Modal */}
      <Modal
        visible={showCategoryModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCategoryModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose a Category</Text>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryOption}
                onPress={() => handleCategorySelect(category)}
              >
                <Icon name={category.icon} size={24} color="#6a5acd" />
                <Text style={styles.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setShowCategoryModal(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Post Input Modal */}
      <Modal
        visible={showPostModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowPostModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create a New Post</Text>
            <Text style={styles.selectedCategoryText}>
              Category: {selectedPostCategory?.title}
            </Text>
            <TextInput
              style={styles.postInput}
              placeholder="What's on your mind?"
              multiline
              value={postContent}
              onChangeText={setPostContent}
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowPostModal(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.postButton]}
                onPress={handleCreatePost}
              >
                <Text style={styles.modalButtonText}>Post</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  topContent: {
    // This will contain the categories section
    marginBottom: 10,
  },
  discussionContainer: {
    flex: 1, // This will make it take the remaining space
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a5acd',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryList: {
    paddingBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: 90,  // Fixed width ensures consistency
    height: 100, // Fixed height ensures consistency
  },
  selectedCategoryItem: {
    backgroundColor: '#6a5acd',
    
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUserInfo: {
    flex: 1,
  },
  postUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postCategory: {
    fontSize: 14,
    color: '#666',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  createPostButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6a5acd',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '90%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  selectedCategoryText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  postInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#ddd',
  },
  postButton: {
    backgroundColor: '#6a5acd',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CommunityConnectScreen;