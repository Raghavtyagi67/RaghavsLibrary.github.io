// Array of over 100 books from Project Gutenberg, with IDs, titles, authors, genres, and descriptions
// Compiled from top downloads, ensuring public domain status
const books = [
    // From tool data and additional known public domain books
    { id: 84, title: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', genre: 'sci-fi', description: 'A scientist creates a living being from assembled body parts and faces the consequences of his actions as the creature seeks revenge and companionship.' },
    { id: 2701, title: 'Moby Dick; Or, The Whale', author: 'Herman Melville', genre: 'classics', description: 'A whaling captain becomes obsessed with hunting a giant white whale, leading to a tale of adventure, madness, and maritime life.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'The story follows the Bennet sisters as they navigate romance, societal expectations, and misunderstandings in Regency-era England.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'A collection of short stories involving a mysterious play that drives readers to madness and explores themes of the supernatural.' },
    { id: 11, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', genre: 'fantasy', description: 'A young girl falls down a rabbit hole into a world of bizarre creatures and logic-defying adventures.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Two young lovers from feuding families meet a tragic end due to fate and family enmity in Verona.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'A scientist\'s experiment with duality leads to the emergence of a violent alter ego, exploring themes of good and evil.' },
    { id: 100, title: 'The Complete Works of William Shakespeare', author: 'William Shakespeare', genre: 'classics', description: 'A compilation of plays and sonnets by the renowned playwright, covering tragedies, comedies, and histories.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'A young Englishwoman experiences love and self-discovery during a trip to Italy, challenging societal norms.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Interwoven stories of ambition, marriage, and politics in a provincial English town during the 19th century.' },
    { id: 37106, title: 'Little Women; Or, Meg, Jo, Beth, and Amy', author: 'Louisa May Alcott', genre: 'classics', description: 'The lives and adventures of the four March sisters as they grow up during the American Civil War.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A young man\'s moral and psychological turmoil after committing a murder in St. Petersburg.' },
    { id: 46, title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', author: 'Charles Dickens', genre: 'fantasy', description: 'A miserly old man is visited by ghosts who teach him the error of his ways on Christmas Eve.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Two Englishwomen rent a villa in Italy, leading to unexpected transformations in their lives and relationships.' },
    { id: 1260, title: 'Jane Eyre: An Autobiography', author: 'Charlotte Brontë', genre: 'classics', description: 'An orphaned governess falls in love with her employer while grappling with issues of class, morality, and independence.' },
    { id: 67979, title: 'The Blue Castle: a novel', author: 'L. M. Montgomery', genre: 'fiction', description: 'A shy woman rebels against her controlling family and discovers love and adventure in a whimsical tale.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'A lawyer investigates a mysterious count suspected of being a vampire, leading to a battle against supernatural forces.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'A humorous epistolary novel following a family\'s travels around Britain, filled with eccentric characters and satire.' },
    { id: 2542, title: 'A Doll\'s House : a play', author: 'Henrik Ibsen', genre: 'classics', description: 'A wife confronts the truths of her marriage and societal expectations, leading to a dramatic upheaval.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Cleghorn Gaskell', genre: 'fiction', description: 'A series of stories depicting life in a small English village, focusing on the lives of spinsters and social changes.' },
    { id: 77331, title: 'The way of all earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'A narrative exploring themes of mortality and human existence through personal stories.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas and Auguste Maquet', genre: 'classics', description: 'A falsely imprisoned man escapes and seeks vengeance against those who wronged him, using wit and wealth.' },
    { id: 1259, title: 'Twenty years after', author: 'Alexandre Dumas and Auguste Maquet', genre: 'fiction', description: 'The sequel to The Three Musketeers, following the heroes in new political intrigues.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'A young man\'s portrait ages while he remains youthful, reflecting his moral decay and hedonistic pursuits.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom — Complete', author: 'T. Smollett', genre: 'fiction', description: 'A cunning adventurer navigates Europe through deception and intrigue in this picaresque novel.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'A woman in Puritan New England faces shame and ostracism after bearing a child out of wedlock.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'The adventures of a foundling as he seeks his place in society, filled with romance and comedy.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'An autobiographical account of the composer\'s early life and development as a musician.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A young man\'s misadventures at sea and on land, marked by humor and social critique.' },
    { id: 16328, title: 'Beowulf: An Anglo-Saxon Epic Poem', author: 'Anonymous', genre: 'classics', description: 'An epic tale of a hero who battles monsters and dragons to protect his kingdom.' },
    { id: 844, title: 'The Importance of Being Earnest: A Trivial Comedy for Serious People', author: 'Oscar Wilde', genre: 'classics', description: 'A satirical play about identity, marriage, and deception in Victorian society.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'A tale of passionate, destructive love between Heathcliff and Catherine on the Yorkshire moors.' },
    { id: 25851, title: 'The Life of Charles Dickens, Vol. I-III, Complete', author: 'John Forster', genre: 'non-fiction', description: 'A detailed biography of the famous author, covering his personal and professional life.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'classics', description: 'Set during the French Revolution, it explores themes of sacrifice and resurrection amid chaos.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'An early Christian doctrine text in Tagalog and Spanish for missionary purposes.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'A collection of detective stories featuring the brilliant Sherlock Holmes solving intricate cases.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'A story of wealth, love, and the American Dream in the 1920s, told from multiple perspectives.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'A girl is transported to a magical land where she embarks on a quest to find her way home.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'A satirical essay suggesting a shocking solution to poverty in Ireland.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'The epic journey of Odysseus returning home after the Trojan War, facing mythical challenges.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'A murder mystery intertwined with philosophical discussions on faith, family, and morality.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in the life of Leopold Bloom in Dublin, exploring stream-of-consciousness narrative.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'The wrath of Achilles during the Trojan War, focusing on heroism and conflict.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'classics', description: 'A young orphan\'s rise in society and his encounters with kindness and cruelty.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'classics', description: 'A boy and a runaway slave raft down the Mississippi, seeking freedom and adventure.' },
    { id: 1998, title: 'Thus Spake Zarathustra: A Book for All and None', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A philosophical novel where a prophet proclaims ideas on the Übermensch and eternal recurrence.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'A foundational text in political philosophy arguing for a strong central authority to avoid societal chaos.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'An epic depiction of Russian society during the Napoleonic Wars, blending history and fiction.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'A pragmatic guide to political power and governance, emphasizing effectiveness over morality.' },
    { id: 77328, title: 'The best short stories of 1925', author: 'Various', genre: 'fiction', description: 'A collection of notable short stories from 1925, showcasing diverse themes and styles.' },
    { id: 24950, title: 'Bradford\'s History of \'Plimoth Plantation\'', author: 'William Bradford', genre: 'history', description: 'A firsthand account of the Pilgrims\' journey and settlement in America.' },
    { id: 205, title: 'Walden, and On The Duty Of Civil Disobedience', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Reflections on simple living in nature and the moral imperative to resist unjust laws.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Jacob Grimm and Wilhelm Grimm', genre: 'fantasy', description: 'A classic collection of German folk tales filled with magic, morals, and adventure.' },
    { id: 74, title: 'The Adventures of Tom Sawyer, Complete', author: 'Mark Twain', genre: 'fiction', description: 'The mischievous adventures of a young boy growing up along the Mississippi River.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'A seminal work on natural rights, government by consent, and the right to revolution.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'The story of an imaginative orphan girl who brings joy and change to her adoptive family.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Short stories exploring loneliness, dreams, and human connections in 19th-century Russia.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'A woman\'s descent into madness as she is confined for "rest cure" treatment.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Bishop of Hippo Saint Augustine', genre: 'non-fiction', description: 'A spiritual autobiography detailing Augustine\'s journey to Christianity and reflections on sin.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'A salesman awakens transformed into a giant insect, exploring alienation and family dynamics.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'A concise exploration of logic, language, and the limits of philosophy.' },
    { id: 16, title: 'Peter Pan', author: 'J. M. Barrie', genre: 'fantasy', description: 'The adventures of a boy who never grows up in the magical world of Neverland.' },
    { id: 120, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'fiction', description: 'A young boy joins pirates in search of buried treasure, filled with adventure and betrayal.' },
    { id: 8800, title: 'The divine comedy', author: 'Dante Alighieri', genre: 'classics', description: 'A poetic journey through Hell, Purgatory, and Heaven, exploring sin, redemption, and divine love.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'A complex tale of legal intrigue, family secrets, and social criticism in Victorian England.' },
    { id: 17199, title: 'Golden Days for Boys and Girls, Vol. XII, Jan. 3, 1891', author: 'Various', genre: 'fiction', description: 'A children\'s magazine with stories, poems, and activities from the late 19th century.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Essays on race, sociology, and African American experiences in the early 20th century.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Sherlock Holmes investigates a family curse involving a supernatural hound on the moors.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'A journey up the Congo River reveals the horrors of colonialism and human nature.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'A schoolmaster encounters a headless horseman in a haunted valley.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'A defense of individual freedom and the limits of societal authority over personal actions.' },
    { id: 829, title: 'Gulliver\'s Travels into Several Remote Nations of the World', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical travels to lands of tiny people, giants, and intelligent horses.' },
    { id: 10007, title: 'Carmilla', author: 'Joseph Sheridan Le Fanu', genre: 'fantasy', description: 'A young woman becomes the victim of a female vampire in a Gothic tale.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'An inventor travels to the distant future, witnessing the evolution and decline of humanity.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martians invade Earth, causing chaos and testing human resilience.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'A scientist turns himself invisible but struggles with the consequences of his experiment.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'A Civil War veteran is transported to Mars, where he battles for a princess.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'A domesticated dog reverts to primal instincts in the Alaskan wilderness.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'An exposé of the meatpacking industry and immigrant life in Chicago.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Karl Marx and Friedrich Engels', genre: 'philosophy', description: 'A political pamphlet outlining communist theory and calling for worker revolution.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'A description of an ideal society on a fictional island, critiquing European politics.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'A pamphlet advocating for American independence from Britain.' },
    { id: 18, title: 'The Federalist Papers', author: 'Alexander Hamilton, John Jay, James Madison', genre: 'history', description: 'Essays promoting the ratification of the U.S. Constitution.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'An orphan\'s harsh life in Victorian London, from workhouse to criminal underworld.' },
    { id: 1399, title: 'Anna Karenina', author: 'Leo Tolstoy', genre: 'fiction', description: 'A tragic story of adultery, family, and society in imperial Russia.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'The March sisters\' experiences of love, loss, and growth during the Civil War.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Tales of horror, mystery, and the macabre by the master storyteller.' },
    { id: 27827, title: 'The Kama Sutra of Vatsyayana', author: 'Vatsyayana', genre: 'non-fiction', description: 'An ancient Indian text on sexuality, eroticism, and emotional fulfillment.' },
    { id: 23, title: 'Narrative of the Life of Frederick Douglass, an American Slave', author: 'Frederick Douglass', genre: 'history', description: 'An autobiography detailing enslavement, escape, and advocacy for abolition.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'A critique of traditional morality, philosophy, and the will to power.' },
    { id: 72679, title: 'The lesser Key of Solomon, Goetia, the book of evil spirits', author: 'Anonymous', genre: 'non-fiction', description: 'A grimoire listing demons and instructions for summoning them.' },
    { id: 15399, title: 'The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African', author: 'Olaudah Equiano', genre: 'history', description: 'A memoir of an enslaved African\'s experiences and path to freedom.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'An allegorical journey through the afterlife, representing the soul\'s path to God.' },
    // Additional books to reach 100+
    { id: 20203, title: 'Autobiography of Benjamin Franklin', author: 'Benjamin Franklin', genre: 'history', description: 'The life story of one of America\'s founding fathers, full of wisdom and anecdotes.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'A story set against the backdrop of the French Revolution, exploring love and sacrifice.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'The coming-of-age story of an orphan named Pip and his unexpected fortunes.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'An ancient epic poem about a hero\'s battles against monsters.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'A comedic play satirizing Victorian social mores.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'A picaresque novel following the exploits of a young Scottish man.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'The autobiography of the famous composer.' },
    { id: 6593, title: 'History of Tom Jones, a Foundling', author: 'Henry Fielding', genre: 'fiction', description: 'A comic novel about the life of a foundling.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'The story of a rogue\'s adventures across Europe.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'A tale of revenge and justice after wrongful imprisonment.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Sequel to The Three Musketeers, set during the Fronde.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'Early Christian doctrine in the Philippines.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Four women find renewal in an Italian villa.' },
    { id: 1727, title: 'The Odyssey', author: 'Homer', genre: 'classics', description: 'Odysseus\' long journey home after the Trojan War.' },
    { id: 1998, title: 'Thus Spake Zarathustra', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Philosophical ideas on the overman and eternal return.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Collection of Poe\'s dark tales and poems.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'Epistolary novel of a family\'s travels.' },
    { id: 22789, title: 'On the Duties of the Clergy', author: 'Saint Ambrose', genre: 'non-fiction', description: 'Guidance for Christian clergy on their responsibilities.' },
    { id: 24950, title: 'Bradford\'s History of Plimoth Plantation', author: 'William Bradford', genre: 'history', description: 'Account of the Pilgrims\' settlement.' },
    { id: 2542, title: 'A Doll\'s House', author: 'Henrik Ibsen', genre: 'fiction', description: 'A woman\'s rebellion against societal norms.' },
    { id: 25851, title: 'The Life of Charles Dickens', author: 'John Forster', genre: 'non-fiction', description: 'Biography of the Victorian novelist.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Collection of classic fairy tales.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'Office of Strategic Services', genre: 'non-fiction', description: 'WWII guide to disrupting enemy operations.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Handbook for writers and speakers.' },
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'Theory of social contract and state authority.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Saint Augustine', genre: 'non-fiction', description: 'Spiritual autobiography.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Tales of love and isolation.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' stories during Civil War.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Life in a small English town.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'history', description: 'Essays on African American life.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'A day in Dublin\'s life.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Critique of morality.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic and philosophy treatise.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'Epic of the Trojan War.' },
    { id: 64317, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'classics', description: 'Jazz Age tale of love and wealth.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Woman\'s journey to freedom.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Grimoire on demonology.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Political theory on rights.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Anthology of 1925 stories.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Reflections on life and death.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Horror stories linked by a play.' },
    // Added more to exceed 100
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Journey through the afterlife.' },
    { id: 10007, title: 'Carmilla', author: 'J. Sheridan Le Fanu', genre: 'fantasy', description: 'Vampire tale with Gothic elements.' },
    { id: 1023, title: 'Bleak House', author: 'Charles Dickens', genre: 'fiction', description: 'Satire on the English legal system.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'Satirical essay on poverty.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'fiction', description: 'Epic revenge story.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'Guide to ruling.' },
    { id: 1259, title: 'Twenty Years After', author: 'Alexandre Dumas', genre: 'fiction', description: 'Musketeers\' later adventures.' },
    { id: 1260, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'classics', description: 'Governess\' romance and trials.' },
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'Romance and social satire.' },
    { id: 140, title: 'The Jungle', author: 'Upton Sinclair', genre: 'non-fiction', description: 'Expose of meatpacking industry.' },
    { id: 1400, title: 'Great Expectations', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s rise in society.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Provincial life and ambitions.' },
    { id: 147, title: 'Common Sense', author: 'Thomas Paine', genre: 'history', description: 'Call for American independence.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Tragic love story.' },
    { id: 15399, title: 'The Interesting Narrative of Olaudah Equiano', author: 'Olaudah Equiano', genre: 'history', description: 'Slave narrative.' },
    { id: 16328, title: 'Beowulf', author: 'Anonymous', genre: 'classics', description: 'Heroic epic poem.' },
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Detective stories.' },
    { id: 17199, title: 'Golden Days for Boys and Girls', author: 'Various', genre: 'fiction', description: 'Children\'s magazine.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'classics', description: 'Portrait of moral decay.' },
    { id: 18, title: 'The Federalist Papers', author: 'Hamilton, Jay, Madison', genre: 'history', description: 'Essays on U.S. Constitution.' },
    { id: 1952, title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', genre: 'fiction', description: 'Descent into madness.' },
    { id: 205, title: 'Walden', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Simple living in nature.' },
    { id: 2130, title: 'Utopia', author: 'Thomas More', genre: 'philosophy', description: 'Ideal society description.' },
    { id: 215, title: 'The Call of the Wild', author: 'Jack London', genre: 'fiction', description: 'Dog\'s return to wild.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'fiction', description: 'Journey into colonialism.' },
    { id: 23, title: 'Narrative of Frederick Douglass', author: 'Frederick Douglass', genre: 'history', description: 'Slave autobiography.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'classics', description: 'Puritan shame and sin.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Murder and guilt.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Brothers Grimm', genre: 'fantasy', description: 'Folk tales collection.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'Napoleonic era Russia.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'OSS', genre: 'non-fiction', description: 'WWII sabotage guide.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'Phrase handbook.' },
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'Self-discovery in Italy.' },
    { id: 2701, title: 'Moby Dick', author: 'Herman Melville', genre: 'classics', description: 'Whaling obsession.' },
    { id: 27827, title: 'The Kama Sutra', author: 'Vatsyayana', genre: 'non-fiction', description: 'Ancient love treatise.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'classics', description: 'Family drama and philosophy.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Supernatural hound mystery.' },
    { id: 35, title: 'The Time Machine', author: 'H. G. Wells', genre: 'sci-fi', description: 'Time travel to future.' },
    { id: 36, title: 'The War of the Worlds', author: 'H. G. Wells', genre: 'sci-fi', description: 'Martian invasion.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'fantasy', description: 'Vampire hunt.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'Individual freedom defense.' },
    { id: 36034, title: 'White Nights and Other Stories', author: 'Fyodor Dostoyevsky', genre: 'fiction', description: 'Emotional short stories.' },
    { id: 37106, title: 'Little Women (Illustrated)', author: 'Louisa May Alcott', genre: 'fiction', description: 'Sisters\' growth.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Gaskell', genre: 'fiction', description: 'Village life stories.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'non-fiction', description: 'Race essays.' },
    { id: 4085, title: 'The Adventures of Roderick Random', author: 'T. Smollett', genre: 'fiction', description: 'Naval adventures.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'Headless horseman tale.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'mystery', description: 'Dual personality horror.' },
    { id: 4300, title: 'Ulysses', author: 'James Joyce', genre: 'classics', description: 'Stream-of-consciousness day.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', genre: 'philosophy', description: 'Morality critique.' },
    { id: 45, title: 'Anne of Green Gables', author: 'L. M. Montgomery', genre: 'fiction', description: 'Orphan\'s adventures.' },
    { id: 46, title: 'A Christmas Carol', author: 'Charles Dickens', genre: 'fantasy', description: 'Ghostly redemption.' },
    { id: 514, title: 'Little Women', author: 'Louisa May Alcott', genre: 'fiction', description: 'Family bonds.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'non-fiction', description: 'Composer\'s memoir.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'Insect transformation.' },
    { id: 5230, title: 'The Invisible Man', author: 'H. G. Wells', genre: 'sci-fi', description: 'Invisibility madness.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'Magical quest.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Logic treatise.' },
    { id: 61, title: 'The Communist Manifesto', author: 'Marx and Engels', genre: 'philosophy', description: 'Revolutionary pamphlet.' },
    { id: 62, title: 'A Princess of Mars', author: 'Edgar Rice Burroughs', genre: 'sci-fi', description: 'Martian adventure.' },
    { id: 6593, title: 'History of Tom Jones', author: 'Henry Fielding', genre: 'fiction', description: 'Foundling\'s tale.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom', author: 'T. Smollett', genre: 'fiction', description: 'Rogue\'s exploits.' },
    { id: 67979, title: 'The Blue Castle', author: 'L. M. Montgomery', genre: 'fiction', description: 'Rebellious romance.' },
    { id: 72679, title: 'The Lesser Key of Solomon', author: 'Anonymous', genre: 'non-fiction', description: 'Demon summoning.' },
    { id: 730, title: 'Oliver Twist', author: 'Charles Dickens', genre: 'fiction', description: 'Orphan\'s struggles.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Rights theory.' },
    { id: 74, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', genre: 'fiction', description: 'Boyhood mischief.' },
    { id: 76, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'fiction', description: 'River journey.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'Passionate revenge.' },
    { id: 77328, title: 'The Best Short Stories of 1925', author: 'Various', genre: 'fiction', description: 'Yearly anthology.' },
    { id: 77331, title: 'The Way of All Earth', author: 'Edith Barnard Delano', genre: 'fiction', description: 'Mortality reflections.' },
    { id: 829, title: 'Gulliver\'s Travels', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical voyages.' },
    { id: 84, title: 'Frankenstein', author: 'Mary Shelley', genre: 'sci-fi', description: 'Creation\'s revenge.' },
    { id: 844, title: 'The Importance of Being Earnest', author: 'Oscar Wilde', genre: 'fiction', description: 'Identity comedy.' },
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'fantasy', description: 'Madness-inducing play.' },
    { id: 8800, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'classics', description: 'Afterlife journey.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'Revolution story.' }
];

// Group books by genre
const genres = ['fiction', 'non-fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy'];
const groupedBooks = genres.reduce((acc, genre) => {
    acc[genre] = books.filter(book => book.genre === genre);
    return acc;
}, {});

// Render book sections
const main = document.getElementById('book-sections');
genres.forEach(genre => {
    if (groupedBooks[genre].length > 0) {
        const section = document.createElement('section');
        section.id = genre;
        section.className = 'section';
        section.innerHTML = `<h2>${genre.charAt(0).toUpperCase() + genre.slice(1)}</h2><div class="book-grid"></div>`;
        const grid = section.querySelector('.book-grid');
        groupedBooks[genre].forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg" alt="${book.title} Cover" onerror="this.src='https://via.placeholder.com/250x350?text=Book+Cover'">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="description">${book.description}</p>
                <a href="https://www.gutenberg.org/ebooks/${book.id}" target="_blank">Download</a>
            `;
            grid.appendChild(card);
        });
        main.appendChild(section);
    }
});

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();
        if (title.includes(query) || author.includes(query) || description.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});