import React from 'react'
import Image from 'next/image'

export default function MoreContent() {
  return (
    <>
        <h1 className='text-bolder'>When I was a kid</h1><br />
        <article>
            <p>Once upon a time, in a cozy little house nestled in the heart of a sleepy town, there was a 
            tradition as golden and sweet as the morning sun. 
            Every Sunday, as the first rays of daylight crept through 
            the curtains, a young child named Janelle would be roused from slumber by the most enchanting aroma.</p>

            <p>It was the scent of cinnamon and vanilla, a fragrance that promised the delights of a lovingly 
            prepared breakfast. Janelle would leap out of bed, the excitement bubbling like the sizzle of 
            butter in a hot pan. Downstairs, in the heart of their warm kitchen, stood Janelle’s mom, the maestro of Sunday mornings.</p>

            <p>With a smile as warm as the toast she flipped, she would welcome Janelle with a hug that melted all 
            the week’s troubles away. The table was set with the finest china, reserved for these special days, 
            and at the center lay a tower of French toast, dusted with powdered sugar and adorned with a drizzle of maple syrup.</p>

            <p>As they sat down to eat, the world outside paused, the only sounds were the clinking of forks
            and the soft hum of a tune from mom’s lips. Those French toast Sundays weren’t just about the 
            food; they were a feast of moments, each one savored, each one a thread in the tapestry of childhood memories.</p>

            <p>And though time would march on, turning Janelle from a child into an adult with Sundays of their 
            own, the essence of those mornings lingered, a reminder that sometimes, happiness is found in a slice of French toast made with love.</p>
        </article><br />
        <Image 
        src="/assets/blog/hello-world/toast1.jpg"
        alt="French toast"
        width={1300}
        height={630}
        ></Image>

        <Image 
        src="/assets/blog/hello-world/berries1.jpg"
        alt="Berries"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/pan1.jpg"
        alt="Pan"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/pans1.jpg"
        alt="Pans"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/powdered_sugar.jpg"
        alt="Powdered sugar"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/powdered_sugar2.jpg"
        alt="Powdered sugar"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/syrup1.jpg"
        alt="Syrup"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/syrup4.jpg"
        alt="Syrup"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/layer1.jpg"
        alt="Layer"
        width={1300}
        height={630}
        ></Image>

        <Image
        src="/assets/blog/hello-world/last.jpg"
        alt="Last"
        width={1300}
        height={630}
        ></Image>
    </>
  )
}
