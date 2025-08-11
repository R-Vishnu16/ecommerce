import { createContext, useContext, useState } from 'react';

interface WishlistContextType {
  wishlist: number[];
  wishlistCount: number;
  toggleWishlist: (productId: number) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  wishlistCount: 0,
  toggleWishlist: () => {},
});

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistCount, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};