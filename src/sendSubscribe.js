import getTransporter from './helpers/getTransporter.js'
import getEpilogue from './markdown/getEpilogue.js'
import getPrologue from './markdown/getPrologue.js'

const from = process.env.MAIL_SMTP_USER

export default async function (config, to) {
	const subject = 'Successfully subscribed'

	let transporter = await getTransporter()

	await transporter.sendMail({
		from,
		to,
		subject,
		text: subject,
		html: getPrologue() + getBody(config) + getEpilogue(),
	})
}

function getBody(config) {
	return `<body>
	<table id="backgroundTable" cellpadding="0" cellspacing="0" border="0">
		<tr>
			<td>
				<!-- body -->
				<table class="body-wrap">
					<tr>
						<td></td>
						<td class="container" bgcolor="#FFFFFF" valign="top">
							<!-- content -->
							<div class="content">
								<table>
									<tr>
										<td>
											<h1>${config.meta.title}</h1>
											<p>
												Bacon ipsum dolor amet labore in
												exercitation prosciutto,
												consequat chuck excepteur short
												ribs sausage ut occaecat
												frankfurter shankle. Drumstick
												tongue nostrud qui ham hock
												kielbasa. Laborum meatloaf ham
												hock magna ex, bacon fatback
												deserunt adipisicing est. Cillum
												fugiat salami consectetur
												dolore, corned beef in et
												t-bone. Pork loin t-bone nisi
												pork, culpa hamburger andouille
												ut pastrami lorem nulla. Strip
												steak corned beef meatloaf,
												fugiat tenderloin eu id enim in
												pork belly nulla sunt ipsum.
											</p>

											<h2>
												Lrrreconcilable Ndndifferences
											</h2>
											<p>
												Nulla elit nostrud duis. Flank
												porchetta cow pastrami dolore
												quis salami qui tenderloin ham
												ea. Irure short ribs hamburger
												tail ribeye kielbasa. Hamburger
												id veniam filet mignon sed
												fatback anim ham hock cupidatat
												bacon tri-tip ham. Ut laborum
												ribeye, bresaola officia boudin
												salami biltong ullamco t-bone
												alcatra in sausage. Flank
												laboris ball tip ground round
												turkey turducken, excepteur
												drumstick in elit. Esse pastrami
												short ribs tempor proident.
											</p>

											<ul>
												<li>
													Ball tip alcatra elit
													shankle, ground round
													consectetur beef ribs
													hamburger
												</li>
												<li>
													Ut sirloin incididunt, beef
													ribs tempor meatloaf
													reprehenderit brisket pork
													ad in elit
												</li>
												<li>
													Magna lorem proident, irure
													id et ullamco cupim chuck
												</li>
											</ul>

											<h3>Bendin' in the Wind</h3>
											<p>
												Landjaeger dolore lorem, shankle
												salami bacon exercitation est.
												Eu meatball enim do bresaola
												excepteur. In boudin tail bacon
												in hamburger beef ribs culpa
												consectetur pork short ribs
												magna chuck. Short loin do
												occaecat elit kevin pork loin,
												duis pancetta cupidatat est
												mollit voluptate bacon flank.
												Alcatra chicken jowl, biltong
												porchetta tri-tip sausage
												officia elit sirloin pork chop
												quis turkey dolore aliqua.
											</p>

											<h4>The Late Philip J. Fry</h4>
											<p>
												Swine cupidatat ullamco eu
												dolore, ea deserunt ball tip
												lorem bacon shankle. Cow
												andouille beef ribs beef cillum
												ham tenderloin alcatra. Do spare
												ribs aliquip in prosciutto, sunt
												filet mignon dolore tail ribeye
												aliqua salami id doner. Et
												aliqua ad ham exercitation.
												Prosciutto sirloin kielbasa,
												short loin adipisicing laboris
												bresaola pork chop picanha.
											</p>

											<ol>
												<li>
													Pig alcatra do incididunt ad
													tail
												</li>
												<li>
													Ball tip beef aliquip tongue
												</li>
												<li>
													Ut aliquip beef officia,
													laboris culpa pork chop eu
													esse jowl est
												</li>
												<li>
													Mollit cupim cillum
													deserunt, eu corned beef
													aute bresaola pig laboris
													dolor beef ribs brisket
												</li>
											</ol>

											<h5>Love and Rocket</h5>
											<p>
												In sunt do esse pariatur enim
												brisket. Tri-tip dolor salami
												beef ribs, pork loin officia
												picanha anim meatball capicola
												enim laborum ad incididunt
												sirloin. Pork tenderloin
												prosciutto ribeye et. Mollit
												sirloin ham ut. Tail pig ad pork
												loin dolor excepteur. Landjaeger
												veniam biltong nulla, est jerky
												ea. Fatback esse magna do
												incididunt in quis, ex ut
												frankfurter meatloaf nisi
												cupidatat doner bresaola.
											</p>
										</td>
									</tr>
								</table>
							</div>
							<!-- /content -->
						</td>
						<td></td>
					</tr>
				</table>
				<!-- /body -->
			</td>
		</tr>
	</table>
</body>
`
}
