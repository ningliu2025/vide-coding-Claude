// ===========================================
// PET DATA - Cats and Dogs
// ===========================================

const petsData = [
    // ===== CATS =====
    {
        id: 1,
        type: "cat",
        name: "Maine Coon",
        slug: "maine-coon",
        shortDescription: "One of the largest domesticated cat breeds, known for their intelligence and playful personality.",
        fullDescription: `The Maine Coon is one of the largest domesticated cat breeds and one of the oldest natural breeds in North America. Often called the "gentle giants" of the cat world, Maine Coons are known for their dog-like personalities and their love of human companionship.

These magnificent cats originated in the state of Maine, where they were prized for their mousing abilities and their resilience in harsh weather conditions. Their thick, water-resistant coats and large, tufted paws make them well-adapted to cold climates.

Maine Coons are highly intelligent and trainable. They're known for their chirping vocalizations and their tendency to follow their owners around the house. Despite their large size, they're gentle and get along well with children and other pets.`,
        image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["0Bmhjf0rKe8", "J---aiyznGQ"],
        characteristics: {
            size: "Large (12-25 lbs)",
            temperament: "Gentle, playful, intelligent, sociable",
            lifespan: "12-15 years",
            origin: "United States (Maine)",
            grooming: "Moderate to high - regular brushing needed",
            exercise: "Moderate - enjoys play and climbing"
        },
        careTips: [
            "Brush their thick coat 2-3 times per week to prevent matting",
            "Provide plenty of interactive toys and climbing structures",
            "Feed high-quality protein-rich diet appropriate for their size",
            "Regular dental care and annual vet checkups are essential",
            "Keep them mentally stimulated with puzzle toys and training"
        ],
        relatedBreeds: [2, 3, 5]
    },
    {
        id: 2,
        type: "cat",
        name: "Persian Cat",
        slug: "persian-cat",
        shortDescription: "Famous for their long, luxurious coat and sweet, gentle personality with distinctive flat faces.",
        fullDescription: `The Persian cat is one of the most recognizable and beloved cat breeds in the world. With their distinctive flat faces, large round eyes, and luxuriously long coats, Persians exude elegance and sophistication.

Originally from Persia (modern-day Iran), these cats were brought to Europe in the 1600s and quickly became prized possessions of nobility. Their calm, gentle demeanor made them perfect companions for aristocratic households.

Persian cats are known for being quiet, affectionate, and preferring a peaceful environment. They enjoy lounging in comfortable spots and are less active than many other breeds. Their sweet, docile nature makes them excellent lap cats and loving family pets.`,
        image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["J---aiyznGQ", "OUtn3pvWmpg"],
        characteristics: {
            size: "Medium (7-12 lbs)",
            temperament: "Calm, gentle, affectionate, quiet",
            lifespan: "12-17 years",
            origin: "Iran (Persia)",
            grooming: "High - daily brushing required",
            exercise: "Low - prefers lounging"
        },
        careTips: [
            "Brush daily to prevent tangles and mats in their long coat",
            "Clean their eyes daily as they can tear excessively",
            "Provide a quiet, peaceful environment",
            "Feed premium cat food to maintain coat quality",
            "Regular grooming appointments may be necessary"
        ],
        relatedBreeds: [1, 5, 6]
    },
    {
        id: 3,
        type: "cat",
        name: "Siamese Cat",
        slug: "siamese-cat",
        shortDescription: "Distinctive breed with striking blue eyes, cream-colored coat with darker points, and vocal personality.",
        fullDescription: `The Siamese cat is one of the oldest and most recognizable Asian cat breeds. Known for their striking color points, bright blue almond-shaped eyes, and distinctive vocalizations, Siamese cats are truly unique.

Originating from Thailand (formerly Siam), these cats were once sacred temple cats and were highly valued by royalty. They were first brought to Europe in the late 1800s and quickly became popular due to their exotic appearance.

Siamese cats are extremely social, intelligent, and vocal. They form strong bonds with their owners and often follow them around like dogs. They're known for their loud, distinctive meows and their desire to "talk" with their human companions. Siamese cats crave attention and companionship.`,
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1478109214826-170faed7305c?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["OUtn3pvWmpg", "lXMskKTw3Bc"],
        characteristics: {
            size: "Medium (8-12 lbs)",
            temperament: "Vocal, social, intelligent, affectionate, demanding",
            lifespan: "15-20 years",
            origin: "Thailand (Siam)",
            grooming: "Low - short coat needs minimal care",
            exercise: "High - very active and playful"
        },
        careTips: [
            "Provide lots of interactive play and mental stimulation",
            "Spend quality time daily as they need companionship",
            "Consider getting a second cat to keep them company",
            "Regular vet checkups for potential genetic health issues",
            "Keep them indoors for safety"
        ],
        relatedBreeds: [1, 4, 6]
    },
    {
        id: 4,
        type: "cat",
        name: "Bengal Cat",
        slug: "bengal-cat",
        shortDescription: "Exotic-looking breed with beautiful spotted or marbled coat patterns, energetic and athletic.",
        fullDescription: `The Bengal cat is a stunning breed that looks like a miniature leopard. Created by crossing domestic cats with Asian Leopard Cats, Bengals retain the wild appearance while having a domestic temperament.

Bengals are one of the most energetic and active cat breeds. They love to climb, play in water, and explore their environment. Their beautiful spotted or marbled coats shimmer in the light, giving them a truly exotic appearance.

These intelligent cats can be trained to perform tricks, walk on a leash, and even play fetch. They're highly curious and need plenty of mental and physical stimulation. Bengals form strong bonds with their families and are known for their dog-like loyalty.`,
        image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["lXMskKTw3Bc", "eX2qFMC8cFo"],
        characteristics: {
            size: "Medium to large (8-15 lbs)",
            temperament: "Active, intelligent, curious, playful, confident",
            lifespan: "12-16 years",
            origin: "United States",
            grooming: "Low - short coat needs minimal care",
            exercise: "Very high - extremely active"
        },
        careTips: [
            "Provide plenty of climbing structures and interactive toys",
            "Engage in daily play sessions to burn energy",
            "Consider leash training for outdoor adventures",
            "Provide puzzle feeders and mental challenges",
            "Bengal-proof your home as they're excellent climbers and jumpers"
        ],
        relatedBreeds: [3, 1, 6]
    },
    {
        id: 5,
        type: "cat",
        name: "Ragdoll Cat",
        slug: "ragdoll-cat",
        shortDescription: "Known for going limp when picked up, with beautiful blue eyes and semi-long fur. Gentle and calm.",
        fullDescription: `The Ragdoll cat is known for its tendency to go limp and relaxed when picked up, like a child's ragdoll toy. This unique characteristic, combined with their striking blue eyes and soft, semi-long coat, makes them one of the most beloved cat breeds.

Developed in California in the 1960s, Ragdolls are one of the largest domestic cat breeds. They're known for their exceptionally gentle, calm, and affectionate nature. Unlike many cats, Ragdolls often enjoy being held and cuddled.

Ragdolls are often described as "puppy-like" cats because they tend to follow their owners from room to room and greet them at the door. They're gentle with children and get along well with other pets. Their laid-back temperament makes them ideal indoor companions.`,
        image: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["eX2qFMC8cFo", "0Bmhjf0rKe8"],
        characteristics: {
            size: "Large (10-20 lbs)",
            temperament: "Gentle, calm, affectionate, docile, trusting",
            lifespan: "12-17 years",
            origin: "United States (California)",
            grooming: "Moderate - brush 2-3 times per week",
            exercise: "Low to moderate"
        },
        careTips: [
            "Brush regularly to prevent matting of their semi-long coat",
            "Keep them indoors as they're too trusting of strangers",
            "Provide comfortable lounging spots throughout the home",
            "Play gentle interactive games daily",
            "Monitor their weight as they can become overweight"
        ],
        relatedBreeds: [2, 1, 6]
    },
    {
        id: 6,
        type: "cat",
        name: "Scottish Fold",
        slug: "scottish-fold",
        shortDescription: "Instantly recognizable by unique folded ears giving an owl-like appearance. Sweet-natured and adaptable.",
        fullDescription: `The Scottish Fold is instantly recognizable by its unique folded ears, which give the cat an owl-like or teddy bear appearance. This distinctive feature is caused by a natural genetic mutation that affects the cartilage in the ears.

The breed originated in Scotland in 1961 when a shepherd discovered a cat with folded ears on his farm. All Scottish Folds can trace their ancestry back to that original cat, named Susie.

Scottish Folds are known for their sweet, calm temperament and their ability to adapt to different living situations. They enjoy being around people and are known for sitting in unusual positions, including on their backs or sitting upright like a person. They're gentle, affectionate cats that bond strongly with their families.`,
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1478109214826-170faed7305c?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["dQw4w9WgXcQ", "J---aiyznGQ"],
        characteristics: {
            size: "Medium (6-13 lbs)",
            temperament: "Sweet, calm, adaptable, affectionate, moderate activity",
            lifespan: "11-15 years",
            origin: "Scotland",
            grooming: "Moderate - regular brushing",
            exercise: "Moderate - enjoys play"
        },
        careTips: [
            "Check ears regularly for wax buildup due to folded structure",
            "Provide regular interactive playtime",
            "Brush coat weekly to remove loose hair",
            "Monitor for joint issues as they can be prone to arthritis",
            "Annual vet checkups are important"
        ],
        relatedBreeds: [2, 5, 1]
    },

    // ===== DOGS =====
    {
        id: 7,
        type: "dog",
        name: "Golden Retriever",
        slug: "golden-retriever",
        shortDescription: "Friendly, intelligent, and devoted family dog. One of the most popular breeds worldwide.",
        fullDescription: `The Golden Retriever is one of the most popular and beloved dog breeds in the world. Known for their friendly, tolerant attitude, Goldens have consistently ranked among America's most popular breeds.

Originally bred in Scotland in the mid-19th century for retrieving waterfowl during hunting, Golden Retrievers excel at many tasks including service work, therapy, and search and rescue.

Golden Retrievers are extremely people-oriented dogs that love being with their families. They're patient with children, friendly with strangers, and get along well with other pets. Their intelligence and eagerness to please make them highly trainable and perfect for first-time dog owners.`,
        image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1554224311-beee415c201f?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["0Bmhjf0rKe8", "J---aiyznGQ"],
        characteristics: {
            size: "Large (55-75 lbs)",
            temperament: "Friendly, intelligent, devoted, patient, gentle",
            lifespan: "10-12 years",
            origin: "Scotland",
            grooming: "Moderate to high - regular brushing needed",
            exercise: "High - needs daily activity"
        },
        careTips: [
            "Provide at least 1 hour of exercise daily",
            "Brush their coat 2-3 times per week to control shedding",
            "Early socialization and training are important",
            "Feed high-quality diet to maintain healthy weight",
            "Regular vet checkups for hip and heart health"
        ],
        relatedBreeds: [8, 9, 10]
    },
    {
        id: 8,
        type: "dog",
        name: "German Shepherd",
        slug: "german-shepherd",
        shortDescription: "Confident, courageous, and smart. Excellent working dog used in police and military roles.",
        fullDescription: `The German Shepherd is one of the most versatile and capable working dog breeds. Known for their intelligence, loyalty, and courage, German Shepherds serve in many roles including police work, military service, search and rescue, and as service dogs.

Developed in Germany in the late 1800s for herding sheep, the breed quickly gained recognition for their trainability and versatility. Today, they're the second most popular breed in the United States.

German Shepherds form strong bonds with their families and are naturally protective. They're highly intelligent and excel at learning complex commands and tasks. With proper training and socialization, they're wonderful family companions who are gentle with children yet naturally watchful.`,
        image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1590759668389-4cc5e4c6b3d3?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["OUtn3pvWmpg", "lXMskKTw3Bc"],
        characteristics: {
            size: "Large (50-90 lbs)",
            temperament: "Confident, courageous, intelligent, loyal, protective",
            lifespan: "9-13 years",
            origin: "Germany",
            grooming: "Moderate - regular brushing",
            exercise: "High - very active breed"
        },
        careTips: [
            "Provide vigorous daily exercise and mental stimulation",
            "Early socialization and obedience training are essential",
            "Brush coat weekly to manage shedding",
            "Feed high-quality diet appropriate for their size",
            "Regular vet checkups for hip dysplasia screening"
        ],
        relatedBreeds: [7, 10, 12]
    },
    {
        id: 9,
        type: "dog",
        name: "Labrador Retriever",
        slug: "labrador-retriever",
        shortDescription: "America's most popular breed. Friendly, outgoing, and active companion with endless energy.",
        fullDescription: `The Labrador Retriever has been America's most popular dog breed for over 30 years. Known for their friendly nature, boundless energy, and love of people, Labs make excellent family pets and working dogs.

Originally from Newfoundland (not Labrador), these dogs were bred to help fishermen retrieve nets and catch escaped fish. Their water-resistant coat and webbed paws make them excellent swimmers.

Labs are known for their gentle mouths, making them ideal retrievers and service dogs. They're exceptionally patient with children and maintain their playful, puppy-like enthusiasm well into adulthood. Their intelligence and eagerness to please make them highly trainable.`,
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1550268816-d3b6ead3e7ed?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1590767774825-c4f36bbf7e64?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1581938145957-f0c93dc5015d?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["eX2qFMC8cFo", "0Bmhjf0rKe8"],
        characteristics: {
            size: "Large (55-80 lbs)",
            temperament: "Friendly, outgoing, active, gentle, intelligent",
            lifespan: "10-12 years",
            origin: "Canada (Newfoundland)",
            grooming: "Moderate - regular brushing",
            exercise: "Very high - extremely active"
        },
        careTips: [
            "Provide at least 1-2 hours of exercise daily",
            "Labs love water - swimming is excellent exercise",
            "Monitor food intake as they can easily become overweight",
            "Early training helps manage their exuberant energy",
            "Regular brushing helps control heavy shedding"
        ],
        relatedBreeds: [7, 8, 11]
    },
    {
        id: 10,
        type: "dog",
        name: "French Bulldog",
        slug: "french-bulldog",
        shortDescription: "Compact, muscular, and affectionate. Perfect apartment dog with distinctive bat ears.",
        fullDescription: `The French Bulldog is a small but muscular dog with distinctive bat ears and a smooshed face. Despite their somewhat grumpy expression, Frenchies are incredibly affectionate, playful, and adaptable companions.

Originally bred in England as miniature Bulldogs, they became popular among lace workers who brought them to France, where they gained their "French" designation. They've become one of the most popular breeds in urban areas.

French Bulldogs are perfect apartment dogs due to their small size and moderate exercise needs. They're friendly with everyone, including children and other pets. Their quiet nature (they rarely bark) and low grooming needs make them ideal city companions. However, their flat faces require special care in hot weather.`,
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605001011156-cbf0d3490814?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["J---aiyznGQ", "OUtn3pvWmpg"],
        characteristics: {
            size: "Small to medium (16-28 lbs)",
            temperament: "Playful, adaptable, smart, affectionate, easygoing",
            lifespan: "10-12 years",
            origin: "France/England",
            grooming: "Low - minimal coat care",
            exercise: "Low to moderate"
        },
        careTips: [
            "Avoid exercise in hot or humid weather due to breathing issues",
            "Clean facial wrinkles daily to prevent infection",
            "Short walks and indoor play are sufficient",
            "Monitor breathing and seek vet care if distressed",
            "Keep at healthy weight to avoid breathing problems"
        ],
        relatedBreeds: [11, 14, 16]
    },
    {
        id: 11,
        type: "dog",
        name: "Poodle",
        slug: "poodle",
        shortDescription: "Exceptionally intelligent and hypoallergenic. Available in standard, miniature, and toy sizes.",
        fullDescription: `The Poodle is one of the most intelligent and versatile dog breeds. Known for their distinctive curly, hypoallergenic coat and elegant appearance, Poodles come in three sizes: Standard, Miniature, and Toy.

Despite their association with France, Poodles were originally bred in Germany as water retrievers. Their distinctive "poodle clip" was designed to help them swim while protecting vital organs and joints from cold water.

Poodles are exceptionally smart and excel at learning tricks and commands. They're athletic, active dogs despite their refined appearance. All three sizes share the same intelligence and personality - friendly, active, and trainable. Their hypoallergenic coat makes them popular with allergy sufferers.`,
        image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1623066463831-86e12ef97433?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1620001796685-adf7110fe1a7?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616473643069-70e0bd57e168?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["lXMskKTw3Bc", "eX2qFMC8cFo"],
        characteristics: {
            size: "Varies - Toy (4-6 lbs), Miniature (10-15 lbs), Standard (45-70 lbs)",
            temperament: "Intelligent, active, alert, trainable, proud",
            lifespan: "12-15 years",
            origin: "Germany/France",
            grooming: "High - professional grooming every 4-6 weeks",
            exercise: "Moderate to high depending on size"
        },
        careTips: [
            "Regular professional grooming is essential",
            "Brush coat several times per week to prevent matting",
            "Provide mental stimulation through training and puzzle toys",
            "Daily exercise appropriate for their size",
            "Clean ears regularly to prevent infections"
        ],
        relatedBreeds: [7, 9, 10]
    },
    {
        id: 12,
        type: "dog",
        name: "Beagle",
        slug: "beagle",
        shortDescription: "Merry, friendly hound with an incredible nose. Perfect family dog with happy-go-lucky attitude.",
        fullDescription: `The Beagle is a small to medium-sized hound known for their incredible sense of smell and tracking ability. With their soulful eyes, floppy ears, and merry temperament, Beagles have captured hearts for centuries.

Originally bred in England for hunting rabbits and hares, Beagles work in packs and are naturally social dogs. Today, they're employed at airports to sniff out contraband food items and serve as wonderful family companions.

Beagles are friendly, curious, and great with children. Their gentle nature and size make them ideal family pets. However, their strong noses can get them into trouble - they love to follow scents and can become focused on tracking. They're also known for their distinctive howl and vocal nature.`,
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1612536916275-7acfa92635d7?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618330981954-8e3acdd85d9e?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["0Bmhjf0rKe8", "J---aiyznGQ"],
        characteristics: {
            size: "Small to medium (20-30 lbs)",
            temperament: "Friendly, curious, merry, determined, gentle",
            lifespan: "10-15 years",
            origin: "England",
            grooming: "Low - minimal coat care",
            exercise: "Moderate to high"
        },
        careTips: [
            "Keep securely fenced as they follow their noses",
            "Provide daily walks and sniffing opportunities",
            "Feed measured portions as they're prone to obesity",
            "Early training helps with their stubborn streak",
            "Be patient with house training - it can take time"
        ],
        relatedBreeds: [7, 13, 9]
    },
    {
        id: 13,
        type: "dog",
        name: "Siberian Husky",
        slug: "siberian-husky",
        shortDescription: "Beautiful, energetic sled dog with striking eyes. Needs lots of exercise and cool climates.",
        fullDescription: `The Siberian Husky is a beautiful, graceful working dog known for their stunning eyes (which can be blue, brown, or one of each), thick coat, and incredible endurance. Bred by the Chukchi people of Siberia to pull sleds over long distances in harsh Arctic conditions.

Huskies are pack dogs that thrive on companionship and are wonderful with families and children. They're known for their friendly, gentle nature and lack of aggression - they make terrible guard dogs because they're too friendly with everyone!

These dogs are incredibly energetic and need significant daily exercise. They're also famous escape artists and love to run. Huskies are vocal dogs that often "talk" with howls and unusual vocalizations. Their thick double coat sheds heavily twice a year.`,
        image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605568427561-40dd23c77c11?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605027990121-cbae9d36fc8e?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["OUtn3pvWmpg", "lXMskKTw3Bc"],
        characteristics: {
            size: "Medium (35-60 lbs)",
            temperament: "Friendly, outgoing, gentle, alert, energetic",
            lifespan: "12-14 years",
            origin: "Siberia, Russia",
            grooming: "Moderate to high - heavy shedding",
            exercise: "Very high - needs vigorous daily activity"
        },
        careTips: [
            "Provide 1-2 hours of vigorous exercise daily",
            "Secure fencing is essential - they're escape artists",
            "Brush regularly, especially during shedding season",
            "Not suited for hot climates",
            "Early training and socialization are important"
        ],
        relatedBreeds: [8, 15, 12]
    },
    {
        id: 14,
        type: "dog",
        name: "Pembroke Welsh Corgi",
        slug: "pembroke-welsh-corgi",
        shortDescription: "Short-legged herding dog with big personality. Intelligent, alert, and affectionate.",
        fullDescription: `The Pembroke Welsh Corgi is a small herding dog with short legs, a long body, and a big personality. Made famous by Queen Elizabeth II (who owned more than 30 during her reign), Corgis are intelligent, affectionate, and surprisingly athletic despite their short stature.

Originally bred in Wales to herd cattle, Corgis would nip at the heels of cattle and then duck under kicks thanks to their low build. Today, they're beloved family companions known for their cheerful disposition and devotion to their families.

Corgis are highly intelligent and trainable but can be stubborn. They're alert and make excellent watchdogs with their tendency to bark. Despite their small size, they have moderate to high energy levels and need regular exercise. Their expressive faces and "Corgi smiles" have made them internet sensations.`,
        image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1612536916275-7acfa92635d7?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519780942146-df0504b9c58b?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583511655826-05700146c88a?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1558861063-a24e792153c4?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["eX2qFMC8cFo", "0Bmhjf0rKe8"],
        characteristics: {
            size: "Small to medium (25-30 lbs)",
            temperament: "Intelligent, alert, affectionate, playful, protective",
            lifespan: "12-13 years",
            origin: "Wales",
            grooming: "Moderate - regular brushing needed",
            exercise: "Moderate - daily walks and play"
        },
        careTips: [
            "Avoid activities that strain their long backs",
            "Brush coat regularly to manage heavy shedding",
            "Watch food portions as they're prone to obesity",
            "Provide mental stimulation and training",
            "Early socialization helps with herding instincts"
        ],
        relatedBreeds: [10, 12, 16]
    },
    {
        id: 15,
        type: "dog",
        name: "Shiba Inu",
        slug: "shiba-inu",
        shortDescription: "Ancient Japanese breed with fox-like appearance. Independent, confident, and spirited.",
        fullDescription: `The Shiba Inu is an ancient Japanese breed that's been around for thousands of years. Known for their fox-like appearance, curled tail, and spirited personality, Shibas are the smallest of Japan's native breeds and have gained worldwide popularity.

Originally bred for hunting in the mountainous regions of Japan, Shibas are confident, independent dogs with a strong prey drive. They're known for their cat-like cleanliness and tendency to groom themselves.

Shibas are loyal to their families but can be aloof with strangers. They're famous for the "Shiba scream" - a high-pitched vocalization they make when displeased. Despite their small size, they have bold, confident personalities and can be stubborn. Early socialization and training are essential for this independent breed.`,
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1604867284911-1ec22e0ae852?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1606238812919-1e36094c5e8d?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["J---aiyznGQ", "OUtn3pvWmpg"],
        characteristics: {
            size: "Small to medium (17-23 lbs)",
            temperament: "Alert, confident, independent, spirited, loyal",
            lifespan: "13-16 years",
            origin: "Japan",
            grooming: "Moderate - heavy shedding twice yearly",
            exercise: "Moderate - daily walks"
        },
        careTips: [
            "Early socialization is crucial for their independent nature",
            "Keep securely leashed/fenced as they have high prey drive",
            "Brush more frequently during shedding seasons",
            "Use positive reinforcement training methods",
            "Provide mental stimulation to prevent boredom"
        ],
        relatedBreeds: [13, 16, 14]
    },
    {
        id: 16,
        type: "dog",
        name: "Border Collie",
        slug: "border-collie",
        shortDescription: "Most intelligent dog breed. Incredibly energetic herding dog that needs a job to do.",
        fullDescription: `The Border Collie is widely regarded as the most intelligent dog breed. Bred on the border between Scotland and England for herding sheep, these dogs are unmatched in their working ability, trainability, and intensity.

Border Collies are famous for their intense "herding eye" - a fixed stare they use to control livestock. They can work all day in all weather conditions and are prized by shepherds worldwide for their incredible work ethic.

These dogs need mental and physical stimulation or they can become destructive. They excel in dog sports like agility, flyball, and herding trials. Border Collies are loyal and affectionate with their families but can be reserved with strangers. They're not recommended for first-time owners due to their high exercise and mental stimulation needs.`,
        image: "https://images.unsplash.com/photo-1609096458733-95b38583ac4e?w=800&h=600&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1609096458733-95b38583ac4e?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1570823066764-d85b5ba49f4e?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800&h=600&fit=crop&q=80"
        ],
        videos: ["lXMskKTw3Bc", "eX2qFMC8cFo"],
        characteristics: {
            size: "Medium (30-55 lbs)",
            temperament: "Intelligent, energetic, alert, responsive, hardworking",
            lifespan: "12-15 years",
            origin: "Scotland/England border",
            grooming: "Moderate - regular brushing",
            exercise: "Very high - needs 2+ hours daily"
        },
        careTips: [
            "Provide 2-3 hours of vigorous exercise and mental work daily",
            "Enroll in dog sports or training classes",
            "Early socialization prevents herding behavior toward children",
            "Provide puzzle toys and training challenges",
            "Not suited for apartment living or sedentary owners"
        ],
        relatedBreeds: [8, 13, 7]
    }
];

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

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

// Get pet by slug
function getPetBySlug(slug) {
    return petsData.find(pet => pet.slug === slug);
}

// Get pet by ID
function getPetById(id) {
    return petsData.find(pet => pet.id === id);
}

// ===========================================
// LOCAL STORAGE MANAGEMENT
// ===========================================

// Initialize data from localStorage with backward compatibility
let likesData = JSON.parse(localStorage.getItem('petLikes')) ||
                JSON.parse(localStorage.getItem('catLikes')) || {};
let commentsData = JSON.parse(localStorage.getItem('petComments')) ||
                   JSON.parse(localStorage.getItem('catComments')) || {};

// Initialize likes and comments for each pet if not exists
petsData.forEach(pet => {
    if (!likesData[pet.id]) likesData[pet.id] = 0;
    if (!commentsData[pet.id]) commentsData[pet.id] = [];
});

// Save data to localStorage
function saveData() {
    localStorage.setItem('petLikes', JSON.stringify(likesData));
    localStorage.setItem('petComments', JSON.stringify(commentsData));
}

// ===========================================
// INTERACTION HANDLERS
// ===========================================

// Handle like button click
function handleLike(petId) {
    likesData[petId]++;
    saveData();

    const likeBtn = document.querySelector(`.like-btn[data-id="${petId}"]`);
    if (likeBtn) {
        const likeCount = likeBtn.querySelector('.like-count');
        likeCount.textContent = likesData[petId];

        // Add animation effect
        likeBtn.classList.add('liked');
        setTimeout(() => {
            likeBtn.classList.remove('liked');
        }, 300);
    }
}

// Handle comment submission
function handleComment(petId) {
    const input = document.querySelector(`.comment-input[data-id="${petId}"]`);
    const commentText = input.value.trim();

    if (commentText === '') {
        alert('Please enter a comment!');
        return;
    }

    const newComment = {
        text: commentText,
        time: formatTime()
    };

    commentsData[petId].push(newComment);
    saveData();

    // Clear input
    input.value = '';

    // Update comments display
    const commentsList = document.querySelector(`.comments-list[data-id="${petId}"]`);
    commentsList.innerHTML = renderComments(petId);

    // Update comment count
    const commentCount = document.querySelector(`.comment-btn[data-id="${petId}"] .comment-count`);
    if (commentCount) {
        commentCount.textContent = commentsData[petId].length;
    }
}

// Toggle comment section
function toggleCommentSection(petId) {
    const commentSection = document.querySelector(`.comment-section[data-id="${petId}"]`);
    commentSection.classList.toggle('active');
}

// Render comments for a specific pet
function renderComments(petId) {
    const comments = commentsData[petId] || [];
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

// ===========================================
// ROUTING SYSTEM
// ===========================================

let currentView = 'gallery';
let currentFilter = 'all';

// Parse URL hash
function parseHash() {
    const hash = window.location.hash.slice(1); // Remove #
    if (hash.startsWith('/breed/')) {
        const slug = hash.replace('/breed/', '');
        return { view: 'detail', slug: slug };
    }
    return { view: 'gallery' };
}

// Navigate to route
function navigateTo(hash) {
    window.location.hash = hash;
}

// Handle hash change
function handleRoute() {
    const route = parseHash();

    if (route.view === 'detail') {
        showDetailView(route.slug);
    } else {
        showGalleryView();
    }
}

// Initialize router
window.addEventListener('hashchange', handleRoute);

// ===========================================
// GALLERY VIEW
// ===========================================

// Create pet card for gallery
function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.dataset.type = pet.type;

    const badge = pet.type === 'cat' ? '🐱 Cat' : '🐶 Dog';

    card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}" class="pet-image">
        <div class="pet-badge">${badge}</div>
        <div class="pet-content">
            <h2>${pet.name}</h2>
            <p>${pet.shortDescription}</p>
            <button class="learn-more-btn" data-slug="${pet.slug}">Learn More →</button>
        </div>
        <div class="interaction-bar">
            <button class="like-btn" data-id="${pet.id}">
                <span class="heart">❤️</span>
                <span class="like-count">${likesData[pet.id]}</span>
            </button>
            <button class="comment-btn" data-id="${pet.id}">
                💬 Comments (<span class="comment-count">${commentsData[pet.id].length}</span>)
            </button>
        </div>
        <div class="comment-section" data-id="${pet.id}">
            <textarea
                class="comment-input"
                placeholder="Share your thoughts about this ${pet.type}..."
                data-id="${pet.id}">
            </textarea>
            <button class="submit-comment" data-id="${pet.id}">Post Comment</button>
            <div class="comments-list" data-id="${pet.id}">
                ${renderComments(pet.id)}
            </div>
        </div>
    `;

    return card;
}

// Show gallery view
function showGalleryView() {
    currentView = 'gallery';
    const app = document.getElementById('app');

    app.innerHTML = `
        <div class="gallery-view">
            <header class="gallery-header">
                <h1>🐾 Amazing Pet Gallery</h1>
                <p>Discover the wonderful world of cats and dogs</p>
            </header>

            <div class="filter-tabs">
                <button class="filter-tab ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                    All Pets
                </button>
                <button class="filter-tab ${currentFilter === 'cats' ? 'active' : ''}" data-filter="cats">
                    🐱 Cats
                </button>
                <button class="filter-tab ${currentFilter === 'dogs' ? 'active' : ''}" data-filter="dogs">
                    🐶 Dogs
                </button>
            </div>

            <div class="breed-count"></div>

            <div class="gallery-container" id="gallery"></div>
        </div>
    `;

    renderGallery(currentFilter);
}

// Render gallery cards
function renderGallery(filter = 'all') {
    currentFilter = filter;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    let filteredPets = petsData;
    if (filter === 'cats') {
        filteredPets = petsData.filter(pet => pet.type === 'cat');
    } else if (filter === 'dogs') {
        filteredPets = petsData.filter(pet => pet.type === 'dog');
    }

    filteredPets.forEach(pet => {
        gallery.appendChild(createPetCard(pet));
    });

    // Update count
    const countEl = document.querySelector('.breed-count');
    const typeText = filter === 'all' ? 'breeds' : filter;
    countEl.textContent = `Showing ${filteredPets.length} ${typeText}`;
}

// ===========================================
// DETAIL VIEW
// ===========================================

// Show detail view
function showDetailView(slug) {
    currentView = 'detail';
    const pet = getPetBySlug(slug);

    if (!pet) {
        show404();
        return;
    }

    const app = document.getElementById('app');
    const typeIcon = pet.type === 'cat' ? '🐱' : '🐶';
    const typeName = pet.type.charAt(0).toUpperCase() + pet.type.slice(1) + 's';

    app.innerHTML = `
        <div class="detail-view">
            <div class="breadcrumb">
                <a href="#/" class="breadcrumb-link">Home</a>
                <span class="breadcrumb-sep">›</span>
                <a href="#/" class="breadcrumb-link">${typeName}</a>
                <span class="breadcrumb-sep">›</span>
                <span>${pet.name}</span>
            </div>

            <div class="hero-section" style="background-image: url('${pet.images[0]}')">
                <div class="hero-overlay">
                    <h1>${typeIcon} ${pet.name}</h1>
                    <p class="hero-subtitle">${pet.characteristics.temperament}</p>
                </div>
            </div>

            <div class="detail-container">
                <div class="detail-sidebar">
                    <div class="characteristics-card">
                        <h3>Characteristics</h3>
                        <table class="characteristics-table">
                            <tr>
                                <td class="char-label">Size</td>
                                <td class="char-value">${pet.characteristics.size}</td>
                            </tr>
                            <tr>
                                <td class="char-label">Temperament</td>
                                <td class="char-value">${pet.characteristics.temperament}</td>
                            </tr>
                            <tr>
                                <td class="char-label">Lifespan</td>
                                <td class="char-value">${pet.characteristics.lifespan}</td>
                            </tr>
                            <tr>
                                <td class="char-label">Origin</td>
                                <td class="char-value">${pet.characteristics.origin}</td>
                            </tr>
                            <tr>
                                <td class="char-label">Grooming</td>
                                <td class="char-value">${pet.characteristics.grooming}</td>
                            </tr>
                            <tr>
                                <td class="char-label">Exercise</td>
                                <td class="char-value">${pet.characteristics.exercise}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="interaction-card">
                        <button class="like-btn" data-id="${pet.id}">
                            ❤️ Like (<span class="like-count">${likesData[pet.id]}</span>)
                        </button>
                    </div>
                </div>

                <div class="detail-main">
                    <section class="detail-section">
                        <h2>About ${pet.name}</h2>
                        <div class="description-text">${pet.fullDescription.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
                    </section>

                    <section class="detail-section">
                        <h2>Photo Gallery</h2>
                        <div class="image-gallery">
                            ${pet.images.map((img, index) => `
                                <img src="${img}" alt="${pet.name} ${index + 1}" class="gallery-image" onclick="openLightbox(${index}, '${pet.slug}')">
                            `).join('')}
                        </div>
                    </section>

                    <section class="detail-section">
                        <h2>Videos</h2>
                        <div class="videos-grid">
                            ${pet.videos.map(videoId => `
                                <iframe
                                    class="detail-video"
                                    src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            `).join('')}
                        </div>
                    </section>

                    <section class="detail-section">
                        <h2>Care Tips</h2>
                        <div class="care-tips">
                            ${pet.careTips.map(tip => `
                                <div class="care-tip-item">
                                    <span class="tip-icon">✓</span>
                                    <span>${tip}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <section class="detail-section">
                        <h2>Related Breeds</h2>
                        <div class="related-breeds">
                            ${pet.relatedBreeds.map(id => {
                                const related = getPetById(id);
                                return `
                                    <div class="related-card" onclick="navigateTo('#/breed/${related.slug}')">
                                        <img src="${related.image}" alt="${related.name}">
                                        <h4>${related.name}</h4>
                                        <p>${related.shortDescription.substring(0, 60)}...</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </section>

                    <section class="detail-section">
                        <h2>Comments</h2>
                        <div class="detail-comments">
                            <textarea
                                class="comment-input"
                                placeholder="Share your thoughts about ${pet.name}..."
                                data-id="${pet.id}">
                            </textarea>
                            <button class="submit-comment" data-id="${pet.id}">Post Comment</button>
                            <div class="comments-list" data-id="${pet.id}">
                                ${renderComments(pet.id)}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div id="lightbox" class="lightbox">
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            <img class="lightbox-content" id="lightbox-img">
            <div class="lightbox-nav">
                <button class="lightbox-prev" onclick="changeLightboxImage(-1)">&#10094;</button>
                <button class="lightbox-next" onclick="changeLightboxImage(1)">&#10095;</button>
            </div>
        </div>
    `;

    // Scroll to top
    window.scrollTo(0, 0);
}

// 404 Page
function show404() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="error-page">
            <h1>404</h1>
            <p>Breed not found</p>
            <a href="#/" class="btn">Back to Gallery</a>
        </div>
    `;
}

// ===========================================
// LIGHTBOX FUNCTIONALITY
// ===========================================

let currentLightboxIndex = 0;
let currentLightboxSlug = '';

function openLightbox(index, slug) {
    currentLightboxIndex = index;
    currentLightboxSlug = slug;
    const pet = getPetBySlug(slug);

    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = pet.images[index];
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeLightboxImage(direction) {
    const pet = getPetBySlug(currentLightboxSlug);
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = pet.images.length - 1;
    } else if (currentLightboxIndex >= pet.images.length) {
        currentLightboxIndex = 0;
    }

    document.getElementById('lightbox-img').src = pet.images[currentLightboxIndex];
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ===========================================
// EVENT DELEGATION
// ===========================================

document.addEventListener('click', (e) => {
    // Handle filter tabs
    if (e.target.classList.contains('filter-tab')) {
        document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        renderGallery(e.target.dataset.filter);
    }

    // Handle like button clicks
    if (e.target.closest('.like-btn')) {
        const petId = parseInt(e.target.closest('.like-btn').dataset.id);
        handleLike(petId);
    }

    // Handle comment button clicks
    if (e.target.closest('.comment-btn')) {
        const petId = parseInt(e.target.closest('.comment-btn').dataset.id);
        toggleCommentSection(petId);
    }

    // Handle submit comment button clicks
    if (e.target.closest('.submit-comment')) {
        const petId = parseInt(e.target.closest('.submit-comment').dataset.id);
        handleComment(petId);
    }

    // Handle learn more button
    if (e.target.classList.contains('learn-more-btn')) {
        const slug = e.target.dataset.slug;
        navigateTo(`#/breed/${slug}`);
    }

    // Handle pet card click (not on buttons)
    if (e.target.closest('.pet-card') && !e.target.closest('button') && !e.target.closest('.comment-section')) {
        const card = e.target.closest('.pet-card');
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        if (learnMoreBtn) {
            navigateTo(`#/breed/${learnMoreBtn.dataset.slug}`);
        }
    }
});

// Handle Enter key in comment input
document.addEventListener('keypress', (e) => {
    if (e.target.classList.contains('comment-input') && e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const petId = parseInt(e.target.dataset.id);
        handleComment(petId);
    }
});

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        handleRoute();
    } else {
        showGalleryView();
    }
});
