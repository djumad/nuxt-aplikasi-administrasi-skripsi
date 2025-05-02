import prisma from "~/lib/PrismaClient";

async function main() {
  // Create Roles
  const [mahasiswa, dosen, admin, timOutline, ketuaTimOutline] = await Promise.all([
    prisma.role.create({ data: { nama: 'Mahasiswa' } }),
    prisma.role.create({ data: { nama: 'Dosen' } }),
    prisma.role.create({ data: { nama: 'Admin' } }),
    prisma.role.create({ data: { nama: 'Tim Outline' } }),
    prisma.role.create({ data: { nama: 'Ketua Tim Outline' } }),
  ]);

  // Create Users
  const [mahasiswa1, dosen1, dosen2, timOutline1, ketuaOutline] = await Promise.all([
    prisma.user.create({
      data: {
        nama: 'Andi Mahasiswa',
        email: 'andi@example.com',
        password: 'password123',
        roleId: mahasiswa.id,
      },
    }),
    prisma.user.create({
      data: {
        nama: 'Bu Dosen 1',
        email: 'dosen1@example.com',
        password: 'password123',
        roleId: dosen.id,
      },
    }),
    prisma.user.create({
      data: {
        nama: 'Pak Dosen 2',
        email: 'dosen2@example.com',
        password: 'password123',
        roleId: dosen.id,
      },
    }),
    prisma.user.create({
      data: {
        nama: 'Siti Tim Outline',
        email: 'siti_outline@example.com',
        password: 'password123',
        roleId: timOutline.id,
      },
    }),
    prisma.user.create({
      data: {
        nama: 'Joko Ketua Outline',
        email: 'joko_ketua@example.com',
        password: 'password123',
        roleId: ketuaTimOutline.id,
      },
    }),
  ]);

  // Create OutlineStatus
  const [menungguOutline, lulusOutline, tidakLulusOutline] = await Promise.all([
    prisma.outlineStatus.create({ data: { nama: 'Menunggu' } }),
    prisma.outlineStatus.create({ data: { nama: 'Lulus' } }),
    prisma.outlineStatus.create({ data: { nama: 'Tidak Lulus' } }),
  ]);

  // Create ProposalStatus
  const [menungguProposal, lulusProposal, revisiProposal] = await Promise.all([
    prisma.proposalStatus.create({ data: { nama: 'Menunggu' } }),
    prisma.proposalStatus.create({ data: { nama: 'Lulus' } }),
    prisma.proposalStatus.create({ data: { nama: 'Revisi' } }),
  ]);

  // Create SkripsiStatus
  const [menungguSkripsi, siapUjian, revisiSkripsi, lulusSkripsi] = await Promise.all([
    prisma.skripsiStatus.create({ data: { nama: 'Menunggu' } }),
    prisma.skripsiStatus.create({ data: { nama: 'Siap Ujian' } }),
    prisma.skripsiStatus.create({ data: { nama: 'Revisi' } }),
    prisma.skripsiStatus.create({ data: { nama: 'Lulus' } }),
  ]);

  console.log('Seeder berhasil dijalankan!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeder error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
