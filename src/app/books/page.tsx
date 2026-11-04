import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, Feather, Heart } from "lucide-react";
import { booksData } from "@/data/books";
import { BookCard } from "@/components/books/BookCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Books | Read Pustak Publications",
  description:
    "Explore published titles by young author Avni Chaturvedi: Emma Finds Her Solution, Pancha Tatva Tales, and Ancient Answers for Modern Problems.",
};

export default function BooksPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. HERO INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-6">
          <SectionHeading
            eyebrow="Published Shelf"
            title="Stories That Inspire, Books That Stay With Us"
            subtitle="“Explore the books by young author Avni Chaturvedi, featuring imagination, Indian wisdom, and meaningful life lessons.”"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                Each work by <strong>Avni Chaturvedi</strong> is crafted with
                reverence for childhood curiosity and India&apos;s rich cultural
                heritage. Whether it is Emma navigating daily challenges through
                creative ingenuity, or timeless fables illuminating the five
                cosmic elements, these books are written to inspire, ground, and
                uplift young readers.
              </p>
              <p>
                Published under <strong>Read Pustak Publications</strong>, each
                volume embodies our core belief: that high-quality, thoughtful
                children&apos;s literature can foster lasting empathy and creative
                confidence.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden shadow-editorial border border-gold/30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwm1kXDo3p3EhXR0nesjHBvlj6OjNJuno4MxXC2LTfWJH2nzz2o5A8vf4acLB1yJhMA6cEogKoZe1KdPPft6CltDSO3pgnd65WstK2u8eOjeOJXlmpxTiHFGcqpVFHsaVedhpmCV6oDWWnNCjb_ZLLfEN81vXwHiq0yGa5QWVqafMYGLWWE5JKYnaa46keF9JTpTkduW8AL_uKWQRwkVJu8mpcXDZsVGmx2QxIu3s"
                alt="A warm, editorial still-life featuring three beautifully bound books in soft lavender and deep purple tones"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE BOOKS CATALOGUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Complete Collection"
            title="Our Published Titles"
            subtitle="Carefully written, thoughtfully edited, and crafted for growing minds"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} featured={book.id === "pancha-tatva-tales"} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE LITERARY CRAFT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold">
              Authorial Vision
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              About the Literary Voice
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
            <p>
              Avni Chaturvedi&apos;s writing weaves timeless heritage with
              child-centric curiosity, creating stories that both entertain and
              instill profound inner grounding. Rather than didactic moralizing,
              her tales invite children into an open dialogue about feelings,
              resilience, and ethical observation.
            </p>
            <p>
              Avni shares stories to help children see wonder in daily life and
              draw quiet resilience from timeless traditions. Her literary voice
              inspires youngsters across India to write their own stories with
              authenticity and courage.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-ivory-warm border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center text-primary shrink-0">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <span className="font-serif italic text-sm sm:text-base text-primary">
                “Every Book Opens a New World.”
              </span>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              Request Books for Your School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

