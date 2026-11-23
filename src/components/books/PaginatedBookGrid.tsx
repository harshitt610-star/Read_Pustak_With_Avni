"use client";

import React, { useState, useMemo } from "react";
import { Book } from "@/types";
import { BookCard } from "@/components/books/BookCard";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Layers,
  Sparkles,
} from "lucide-react";

interface PaginatedBookGridProps {
  books: Book[];
  pageSize?: number;
  compact?: boolean;
  featuredId?: string;
  showViewAllToggle?: boolean;
}

export const PaginatedBookGrid: React.FC<PaginatedBookGridProps> = ({
  books,
  pageSize = 4,
  compact = false,
  featuredId = "my-little-squirrel",
  showViewAllToggle = true,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isViewAll, setIsViewAll] = useState<boolean>(false);

  const totalPages = Math.ceil(books.length / pageSize);

  const displayedBooks = useMemo(() => {
    if (isViewAll) return books;
    const startIndex = (currentPage - 1) * pageSize;
    return books.slice(startIndex, startIndex + pageSize);
  }, [books, currentPage, pageSize, isViewAll]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsViewAll(false);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, books.length);

  return (
    <div className="flex flex-col gap-8">
      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
        {displayedBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            compact={compact}
            featured={book.id === featuredId}
          />
        ))}
      </div>

      {/* Pagination & Controls Bar */}
      {books.length > pageSize && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white via-ivory-warm to-white border border-border/80 shadow-xs">
          {/* Left: Status / Item Counter */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-charcoal">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {isViewAll ? (
              <span>
                Showing all <strong>{books.length}</strong> published titles
              </span>
            ) : (
              <span>
                Showing <strong>{startItem}–{endItem}</strong> of{" "}
                <strong>{books.length}</strong> published titles
              </span>
            )}
          </div>

          {/* Middle: Pagination Navigation */}
          {!isViewAll && totalPages > 1 && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:bg-lavender disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center ${
                        isActive
                          ? "bg-primary text-white border-2 border-gold shadow-editorial"
                          : "bg-white text-charcoal border border-border hover:bg-lavender"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:bg-lavender disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Right: View All / Paginated Toggle */}
          {showViewAllToggle && (
            <button
              type="button"
              onClick={() => setIsViewAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gold/40 bg-gold/10 hover:bg-gold/20 text-primary text-xs font-semibold transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>
                {isViewAll
                  ? `Paginated (4 per page)`
                  : `View All (${books.length})`}
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
