import { FadeIn } from '../animations/FadeIn'

export function About() {
  return (
    <section id="about" className="py-32 bg-[#F8F8F8]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa"
                alt="Sarah working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-xl text-gray-600">
                I'm a product designer with 6+ years of experience creating
                digital products that solve real problems. My approach combines
                user-centered design principles with strategic thinking to
                deliver meaningful experiences.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Strategic Design</h3>
                    <p className="text-gray-600">
                      Creating solutions that align with business goals
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    💡
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">User-Centered</h3>
                    <p className="text-gray-600">
                      Focusing on real user needs and pain points
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    ✨
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Pixel Perfect</h3>
                    <p className="text-gray-600">
                      Attention to detail in every design decision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
