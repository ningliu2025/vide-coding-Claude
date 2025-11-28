// Cat species data
const catSpecies = [
    {
        id: 1,
        name: "Maine Coon",
        description: "One of the largest domesticated cat breeds, known for their intelligence, playful personality, and distinctive physical appearance. They're often called 'gentle giants' of the cat world.",
        image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 2,
        name: "Persian Cat",
        description: "Famous for their long, luxurious coat and sweet, gentle personality. Persian cats have a distinctive flat face and are known for being calm and affectionate companions.",
        image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/J---aiyznGQ"
    },
    {
        id: 3,
        name: "Siamese Cat",
        description: "Distinctive breed known for their striking blue eyes, cream-colored coat with darker points, and vocal personality. They're highly social and form strong bonds with their owners.",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/CQ9Bc5L6T4I"
    },
    {
        id: 4,
        name: "Bengal Cat",
        description: "A exotic-looking breed with beautiful spotted or marbled coat patterns. Bengals are energetic, playful, and athletic cats that love to climb and explore.",
        image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/hY7m5jjJ9mM"
    },
    {
        id: 5,
        name: "Ragdoll Cat",
        description: "Known for their tendency to go limp when picked up, like a ragdoll. They have beautiful blue eyes and semi-long fur. Ragdolls are gentle, calm, and affectionate.",
        image: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/mP-TAPKe8bM"
    },
    {
        id: 6,
        name: "Scottish Fold",
        description: "Instantly recognizable by their unique folded ears, which give them an owl-like appearance. They're sweet-natured, adaptable, and enjoy human companionship.",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&h=600&fit=crop",
        video: "https://www.youtube.com/embed/W_0z2aPmPGI"
    }
];

// Initialize data from localStorage
let likesData = JSON.parse(localStorage.getItem('catLikes')) || {};
let commentsData = JSON.parse(localStorage.getItem('catComments')) || {};

// Initialize likes and comments for each cat if not exists
catSpecies.forEach(cat => {
    if (!likesData[cat.id]) likesData[cat.id] = 0;
    if (!commentsData[cat.id]) commentsData[cat.id] = [];
});

// Create cat cards
function createCatCard(cat) {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}" class="cat-image">
        <div class="cat-content">
            <h2>${cat.name}</h2>
            <p>${cat.description}</p>
            <iframe
                class="cat-video"
                src="${cat.video}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div class="interaction-bar">
            <button class="like-btn" data-id="${cat.id}">
                <span class="heart">❤️</span>
                <span class="like-count">${likesData[cat.id]}</span>
            </button>
            <button class="comment-btn" data-id="${cat.id}">
                💬 Comments (<span class="comment-count">${commentsData[cat.id].length}</span>)
            </button>
        </div>
        <div class="comment-section" data-id="${cat.id}">
            <textarea
                class="comment-input"
                placeholder="Share your thoughts about this beautiful cat..."
                data-id="${cat.id}">
            </textarea>
            <button class="submit-comment" data-id="${cat.id}">Post Comment</button>
            <div class="comments-list" data-id="${cat.id}">
                ${renderComments(cat.id)}
            </div>
        </div>
    `;
    return card;
}

// Render comments for a specific cat
function renderComments(catId) {
    const comments = commentsData[catId] || [];
    if (comments.length === 0) {
        return '<p style="color: #999; font-size: 0.9em; margin-top: 10px;">No comments yet. Be the first to comment!</p>';
    }
    return comments.map(comment => `
        <div class="comment-item">
            <div class="comment-text">${escapeHtml(comment.text)}</div>
            <div class="comment-time">${comment.time}</div>
        </div>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Format time
function formatTime() {
    const now = new Date();
    return now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('catLikes', JSON.stringify(likesData));
    localStorage.setItem('catComments', JSON.stringify(commentsData));
}

// Handle like button click
function handleLike(catId) {
    likesData[catId]++;
    saveData();

    const likeBtn = document.querySelector(`.like-btn[data-id="${catId}"]`);
    const likeCount = likeBtn.querySelector('.like-count');
    likeCount.textContent = likesData[catId];

    // Add animation effect
    likeBtn.classList.add('liked');
    setTimeout(() => {
        likeBtn.classList.remove('liked');
    }, 300);
}

// Handle comment submission
function handleComment(catId) {
    const input = document.querySelector(`.comment-input[data-id="${catId}"]`);
    const commentText = input.value.trim();

    if (commentText === '') {
        alert('Please enter a comment!');
        return;
    }

    const newComment = {
        text: commentText,
        time: formatTime()
    };

    commentsData[catId].push(newComment);
    saveData();

    // Clear input
    input.value = '';

    // Update comments display
    const commentsList = document.querySelector(`.comments-list[data-id="${catId}"]`);
    commentsList.innerHTML = renderComments(catId);

    // Update comment count
    const commentCount = document.querySelector(`.comment-btn[data-id="${catId}"] .comment-count`);
    commentCount.textContent = commentsData[catId].length;
}

// Toggle comment section
function toggleCommentSection(catId) {
    const commentSection = document.querySelector(`.comment-section[data-id="${catId}"]`);
    commentSection.classList.toggle('active');
}

// Initialize the gallery
function initGallery() {
    const gallery = document.getElementById('gallery');

    catSpecies.forEach(cat => {
        gallery.appendChild(createCatCard(cat));
    });

    // Add event listeners
    document.addEventListener('click', (e) => {
        // Handle like button clicks
        if (e.target.closest('.like-btn')) {
            const catId = parseInt(e.target.closest('.like-btn').dataset.id);
            handleLike(catId);
        }

        // Handle comment button clicks
        if (e.target.closest('.comment-btn')) {
            const catId = parseInt(e.target.closest('.comment-btn').dataset.id);
            toggleCommentSection(catId);
        }

        // Handle submit comment button clicks
        if (e.target.closest('.submit-comment')) {
            const catId = parseInt(e.target.closest('.submit-comment').dataset.id);
            handleComment(catId);
        }
    });

    // Handle Enter key in comment input
    document.addEventListener('keypress', (e) => {
        if (e.target.classList.contains('comment-input') && e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const catId = parseInt(e.target.dataset.id);
            handleComment(catId);
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initGallery);
